import React, { useEffect, useMemo, useRef, useState } from "react";
import { MENU } from "./menuData";
import { locales, applyDir } from "./i18n";

const ALL = ["all","mains","sides","desserts","beverages","seasonal","chef"];

function useLang() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "pt");
  const t = locales[lang] || locales.pt;
  useEffect(() => {
    localStorage.setItem("lang", lang);
    applyDir(t.dir);
    document.documentElement.lang = t.code;
  }, [lang, t.dir, t.code]);
  return { lang, setLang, t };
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || "#home");
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return hash.replace("#","") || "home";
}

function Navbar({ t, onNav }) {
  const Item = ({href, children}) => (
    <a href={href} onClick={onNav} className="nav-link">{children}</a>
  );
  return (
    <header className="nav">
      <a href="#home" className="brand">
        <img src="/logo.png" alt="logo" />
        <span>Panela<br/>de Barro</span>
      </a>
      <nav>
        <Item href="#home">{t.nav.about}</Item>
        <Item href="#menu">{t.nav.menu}</Item>
        <Item href="#gallery">{t.nav.gallery}</Item>
        <Item href="#location">{t.nav.location}</Item>
        <Item href="#contact">{t.nav.contact}</Item>
      </nav>
    </header>
  );
}

function LangSwitcher({lang,setLang}) {
  return (
    <div className="lang">
      {["pt","en","ar"].map(code=>(
        <button
          key={code}
          onClick={()=>setLang(code)}
          className={`pill ${lang===code?"active":""}`}
          aria-label={code.toUpperCase()}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function AutoCarousel({ images, interval=3500 }) {
  const [i,setI] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setI(prev => (prev+1)%images.length), interval);
    return ()=>clearInterval(id);
  },[images.length, interval]);
  return (
    <div className="carousel">
      {images.map((src,idx)=>(
        <img key={src} src={src} alt="" className={`slide ${idx===i?"on":""}`} loading="eager"/>
      ))}
    </div>
  );
}

function Hero({ t }) {
  const heroImgs = [
    "/images/picanha-grelhada.jpg",
    "/images/vaca-atolada.jpg",
    "/images/feijoada-costela.jpg"
  ];
  return (
    <section className="hero" id="home">
      <AutoCarousel images={heroImgs}/>
      <div className="hero-text">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSub}</p>
        <em className="note">{t.openingNote}</em>
        <a className="cta" href="#menu">{t.nav.menu}</a>
      </div>
    </section>
  );
}

function MenuCard({ item, t }) {
  const tagLabel = {
    mains: t.category.mains,
    sides: t.category.sides,
    desserts: t.category.desserts,
    beverages: t.category.beverages,
    seasonal: t.category.seasonal,
    chef: t.category.chef
  }[item.tag] || "";

  return (
    <article className="card">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="card-body">
        <div className="card-head">
          <h3>{item.title}</h3>
          {tagLabel && <span className="badge">{tagLabel}</span>}
        </div>
        <p>{item.desc}</p>
      </div>
    </article>
  );
}

function MenuPreview({ t }) {
  const preview = useMemo(()=> MENU.slice(0, 9),[]);
  return (
    <section className="wrap" id="menu">
      <h2>{t.menuPreview}</h2>
      <div className="grid">
        {preview.map(m => <MenuCard key={m.id} item={m} t={t}/>)}
      </div>
      <div style={{textAlign:"center", marginTop:16}}>
        <a className="cta outline" href="#menu-full">{t.seeFullMenu}</a>
      </div>
    </section>
  );
}

function Filters({t, value, onChange}) {
  return (
    <div className="filters">
      {ALL.map(k=>(
        <button key={k}
          className={`pill ${value===k?"active":""}`}
          onClick={()=>onChange(k)}>
          {k==="all" ? t.category.all :
           k==="mains" ? t.category.mains :
           k==="sides" ? t.category.sides :
           k==="desserts" ? t.category.desserts :
           k==="beverages" ? t.category.beverages :
           k==="seasonal" ? t.category.seasonal :
           t.category.chef}
        </button>
      ))}
    </div>
  );
}

function MenuPage({ t }) {
  const [f,setF] = useState("all");
  const items = useMemo(()=> f==="all" ? MENU : MENU.filter(m=>m.tag===f), [f]);
  return (
    <section className="wrap" id="menu-full">
      <h2>{t.nav.menu}</h2>
      <Filters t={t} value={f} onChange={setF}/>
      <div className="grid">
        {items.map(m => <MenuCard key={m.id} item={m} t={t}/>)}
      </div>
    </section>
  );
}

function Gallery({t}) {
  const imgs = [
    "/images/picanha-grelhada.jpg",
    "/images/feijoada-costela.jpg",
    "/images/pao-de-queijo.jpg",
    "/images/polenta-frita.jpg"
  ];
  return (
    <section className="wrap" id="gallery">
      <h2>{t.galleryTitle}</h2>
      <div className="masonry">
        {imgs.map((src,i)=> <img key={i} src={src} alt="" loading="lazy"/>)}
      </div>
    </section>
  );
}

function Location({t}) {
  return (
    <section className="wrap" id="location">
      <h2>{t.locationTitle}</h2>
      <p className="lead">{t.locationText}</p>
      <div className="map">
        <iframe
          title="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Baraha%20Town%20Doha%20Qatar&output=embed">
        </iframe>
      </div>
    </section>
  );
}

function Contact({t}) {
  return (
    <section className="wrap" id="contact">
      <h2>{t.contactTitle}</h2>
      <ul className="contact">
        <li><strong>{t.contactEmail}:</strong> restaurant@paneladebarroqatar.com</li>
        <li><strong>{t.contactPhone}:</strong> +974 3047 5279</li>
      </ul>
    </section>
  );
}

export default function App(){
  const { lang, setLang, t } = useLang();
  const route = useHashRoute();

  // rolagem suave ao clicar no menu
  const onNav = (e)=>{
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const id = href.slice(1);
      requestAnimationFrame(()=>{
        document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"});
      });
    }
  };

  return (
    <>
      <Navbar t={t} onNav={onNav} />
      <LangSwitcher lang={lang} setLang={setLang}/>
      {route==="menu-full" ? (
        <MenuPage t={t}/>
      ) : (
        <>
          <Hero t={t}/>
          <MenuPreview t={t}/>
          <Gallery t={t}/>
          <Location t={t}/>
          <Contact t={t}/>
        </>
      )}
      <footer className="footer">{t.footer}</footer>
    </>
  );
}