import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";
import { MENU } from "./menuData";
import { LOCALES, STRINGS } from "./i18n";

const heroImages = [
  "/images/vaca-atolada.jpg",
  "/images/picanha-grelhada.jpg",
  "/images/feijoada-costela.jpg"
];

function useLocale() {
  const [locale, setLocale] = useState(() => {
    const url = new URL(window.location.href);
    return url.searchParams.get("lang") || localStorage.getItem("lang") || LOCALES.PT;
  });
  const t = useMemo(() => STRINGS[locale] ?? STRINGS.pt, [locale]);

  useEffect(() => {
    localStorage.setItem("lang", locale);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", locale);
    window.history.replaceState({}, "", url);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === LOCALES.AR ? "rtl" : "ltr";
  }, [locale]);

  return { locale, setLocale, t };
}

function Header({ locale, setLocale, t }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header" translate="no">
      <nav className="nav container">
        <div className="brand">
          <img src="/logo.png" width="28" height="28" alt="" />
          <span translate="no">Panela de Barro</span>
        </div>

        <a href="#about" onClick={(e)=>{e.preventDefault();scrollTo("about")}}>{t.nav_about}</a>
        <a href="#menu" onClick={(e)=>{e.preventDefault();scrollTo("menu")}}>{t.nav_menu}</a>
        <a href="#gallery" onClick={(e)=>{e.preventDefault();scrollTo("gallery")}}>{t.nav_gallery}</a>
        <a href="#location" onClick={(e)=>{e.preventDefault();scrollTo("location")}}>{t.nav_location}</a>
        <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo("contact")}}>{t.nav_contact}</a>

        <div className="langs">
          {[LOCALES.PT, LOCALES.EN, LOCALES.AR].map(code=>(
            <button
              key={code}
              className={locale===code?"active":""}
              onClick={()=>setLocale(code)}
              aria-label={`language ${code}`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero({ t }) {
  const [idx, setIdx] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=>setIdx(i=>(i+1)%heroImages.length), 5000);
    return ()=>clearInterval(id);
  },[]);
  return (
    <section className="hero" id="home">
      <img src={heroImages[idx]} alt="" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-card">
          <h1 className="hero-title" translate="no">{t.hero_title}</h1>
          <p className="hero-sub">{t.hero_sub}</p>
          <p className="hero-note"><em>{t.opening_note}</em></p>
          <a className="hero-cta" href="#menu" onClick={(e)=>{e.preventDefault();document.getElementById("menu")?.scrollIntoView({behavior:"smooth"})}}>{t.hero_cta}</a>
        </div>
      </div>
    </section>
  )
}

function Filters({ current, setCurrent, t }) {
  const tabs = [
    {key:"all", label:t.filters_all},
    {key:"mains", label:t.filters_mains},
    {key:"sides", label:t.filters_sides},
    {key:"desserts", label:t.filters_desserts},
    {key:"drinks", label:t.filters_drinks},
    {key:"seasonal", label:t.filters_seasonal},
    {key:"chef", label:t.filters_chef},
  ];
  return (
    <div className="pills">
      {tabs.map(tab=>(
        <button key={tab.key} className={`pill ${current===tab.key?"active":""}`} onClick={()=>setCurrent(tab.key)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function MenuGrid({ t }) {
  const [filter, setFilter] = useState("all");
  const data = useMemo(()=> filter==="all" ? MENU : MENU.filter(i=>i.category===filter), [filter]);
  return (
    <section id="menu" className="section">
      <div className="container">
        <h2>{t.nav_menu}</h2>
        <Filters current={filter} setCurrent={setFilter} t={t} />
        <div className="grid">
          {data.map(item=>(
            <article className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="content">
                <span className="badge">{item.tag}</span>
                <h3 style={{margin:"6px 0 6px"}}>{item.title}</h3>
                <p style={{margin:0,color:"#543"}}>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About({ t }){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t.nav_about}</h2>
        <p>Chef-owner Quessi Jhones comanda a cozinha com sua mãe, Dona Cleuza, e seu irmão (Head Chef com 10+ anos). </p>
      </div>
    </section>
  );
}

function Gallery({ t }){
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>{t.nav_gallery}</h2>
        <div className="grid">
          {heroImages.map((src,i)=>(
            <img key={i} src={src} alt="" style={{borderRadius:14}} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Location({ t }){
  return (
    <section id="location" className="section">
      <div className="container">
        <h2>{t.location_title}</h2>
        <p><strong>{t.address}</strong></p>
        <iframe
          title="map"
          width="100%" height="300" style={{border:0,borderRadius:12}}
          loading="lazy" allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Baraha%20Town%2C%20Doha%2C%20Qatar&output=embed">
        </iframe>
      </div>
    </section>
  );
}

function Contact({ t }){
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>{t.contact_title}</h2>
        <p><strong>{t.email}:</strong> restaurant@paneladebarroqatar.com</p>
        <p><strong>{t.phone}:</strong> +974 3047 5279</p>
      </div>
    </section>
  );
}

export default function App(){
  const { locale, setLocale, t } = useLocale();

  return (
    <>
      <Header locale={locale} setLocale={setLocale} t={t} />
      <Hero t={t} />
      <About t={t} />
      <MenuGrid t={t} />
      <Gallery t={t} />
      <Location t={t} />
      <Contact t={t} />
      <footer className="footer">© {new Date().getFullYear()} <span translate="no">Panela de Barro</span></footer>
    </>
  );
}