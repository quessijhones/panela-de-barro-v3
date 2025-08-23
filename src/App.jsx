import { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { MENU } from "./menuData";
import { LOCALES, STRINGS } from "./i18n";

/* ===== i18n ===== */
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

/* ===== imagens do herói ===== */
const heroImages = [
  "/images/vaca-atolada.jpg",
  "/images/picanha-grelhada.jpg",
  "/images/feijoada-costela.jpg",
];

/* ===== Header ===== */
function Header({ locale, setLocale, t, navigate }) {
  return (
    <header className="header" translate="no">
      <nav className="nav container">
        <div className="brand" style={{ cursor: "pointer" }} onClick={() => navigate("#/home")}>
          <img src="/logo.png" width="28" height="28" alt="" />
          <span translate="no">Panela de Barro</span>
        </div>

        <a onClick={(e)=>{e.preventDefault();navigate("#/home#about")}} href="#">{t.nav_about}</a>
        <a onClick={(e)=>{e.preventDefault();navigate("#/menu")}} href="#">{t.nav_menu}</a>
        <a onClick={(e)=>{e.preventDefault();navigate("#/home#gallery")}} href="#">{t.nav_gallery}</a>
        <a onClick={(e)=>{e.preventDefault();navigate("#/home#location")}} href="#">{t.nav_location}</a>
        <a onClick={(e)=>{e.preventDefault();navigate("#/home#contact")}} href="#">{t.nav_contact}</a>

        <div className="langs">
          {[LOCALES.PT, LOCALES.EN, LOCALES.AR].map(code=>(
            <button key={code} className={locale===code?"active":""} onClick={()=>setLocale(code)}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

/* ===== Hero / carrossel ===== */
function Hero({ t, navigate }) {
  const [idx, setIdx] = useState(0);
  useEffect(()=>{ const id=setInterval(()=>setIdx(i=>(i+1)%heroImages.length),5000); return ()=>clearInterval(id)},[]);
  return (
    <section className="hero" id="home">
      <img src={heroImages[idx]} alt="" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-card">
          <h1 className="hero-title" translate="no">{t.hero_title}</h1>
          <p className="hero-sub">{t.hero_sub}</p>
          <p className="hero-note"><em>{t.opening_note}</em></p>
          <a className="hero-cta" href="#/menu" onClick={(e)=>{e.preventDefault();navigate("#/menu")}}>{t.hero_cta}</a>
        </div>
      </div>
    </section>
  );
}

/* ===== Seções Home ===== */
function About({ t }){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>{t.nav_about}</h2>
        <p>Chef-owner Quessi Jhones comanda a cozinha com sua mãe, Dona Cleuza, e seu irmão (Head Chef com 10+ anos).</p>
      </div>
    </section>
  );
}

function Gallery({ t }){
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2>{t.nav_gallery}</h2>
        <div className="gallery-grid">
          {heroImages.map((src,i)=>(<img key={i} src={src} alt="" />))}
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
        <p><strong>Baraha Town, Doha, Qatar</strong></p>
        <iframe
          title="map" width="100%" height="300" style={{border:0,borderRadius:12}}
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

/* ===== Filtros + Modal ===== */
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

function MenuModal({ item, onClose }){
  return (
    <div className={`modal ${item?"show":""}`} role="dialog" aria-modal="true" onClick={onClose}>
      {item && (
        <div className="modal-card" onClick={e=>e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>✕</button>
          <img src={item.image} alt={item.title} />
          <div className="modal-body">
            <span className="badge">{item.tag}</span>
            <h3 style={{margin:"6px 0 4px"}}>{item.title}</h3>
            <p style={{margin:0,color:"#543"}}>{item.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuPage({ t }){
  const [filter, setFilter] = useState("all");
  const data = useMemo(()=> filter==="all" ? MENU : MENU.filter(i=>i.category===filter), [filter]);
  const [selected, setSelected] = useState(null);

  return (
    <main className="section" id="menu-page">
      <div className="container">
        <h2>{t.nav_menu}</h2>
        <Filters current={filter} setCurrent={setFilter} t={t} />
        <div className="grid">
          {data.map(item=>(
            <article className="card" key={item.id} onClick={()=>setSelected(item)} aria-label={item.title}>
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
      <MenuModal item={selected} onClose={()=>setSelected(null)} />
    </main>
  );
}

/* ===== Roteador simples (#/home, #/menu) ===== */
function useHashRoute(){
  const [hash, setHash] = useState(window.location.hash || "#/home");
  useEffect(()=>{
    const onHash=()=>setHash(window.location.hash || "#/home");
    window.addEventListener("hashchange", onHash);
    return ()=>window.removeEventListener("hashchange", onHash);
  },[]);
  const navigate=(h)=>{
    if(h.includes("#/home#")){
      window.location.hash = "#/home";
      setTimeout(()=>{
        const id = h.split("#/home#")[1];
        document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
      }, 10);
    }else{
      window.location.hash = h;
    }
  };
  return { hash, navigate };
}

/* ===== Splash (CORRIGIDO: style como OBJETO) ===== */
function Splash(){
  return (
    <div className="splash" aria-hidden="true">
      <div className="logo-wrap">
        <img
          src="/logo.png"
          alt=""
          style={{ width:"100%", height:"100%", objectFit:"contain" }}
        />
        <div className="smoke">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
  );
}

/* ===== App ===== */
export default function App(){
  const { locale, setLocale, t } = useLocale();
  const { hash, navigate } = useHashRoute();

  useEffect(()=>{
    if(!window.location.hash) window.location.hash = "#/home";
  },[]);

  return (
    <>
      <Splash />
      <Header locale={locale} setLocale={setLocale} t={t} navigate={navigate} />
      {hash.startsWith("#/menu") ? (
        <MenuPage t={t} />
      ) : (
        <>
          <Hero t={t} navigate={navigate} />
          <About t={t} />
          <Gallery t={t} />
          <Location t={t} />
          <Contact t={t} />
        </>
      )}
      <footer className="footer">© {new Date().getFullYear()} <span translate="no">Panela de Barro</span></footer>
    </>
  );
}