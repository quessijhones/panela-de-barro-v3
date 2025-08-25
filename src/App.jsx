import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, getLang, setLang, t } from "./i18n";
import MENU from "./menuData"; // seu arquivo atual
// imagens imersivas (já na pasta public/immersive)
const IMMS = ["amazonia","cerrado","lencois","litoral","serra"].map(n=>`/immersive/${n}.jpg`);

function usePage() {
  const hashToPage = () => {
    const h = (location.hash || "#/").replace("#/","");
    return h || "home";
  };
  const [page,setPage] = useState(hashToPage());
  useEffect(()=>{
    const onHash = ()=> setPage(hashToPage());
    window.addEventListener("hashchange", onHash);
    return ()=> window.removeEventListener("hashchange", onHash);
  },[]);
  return [page,setPage];
}
function useLang() {
  const [lang,setL] = useState(getLang());
  useEffect(()=>{
    const onChange = ()=> setL(getLang());
    window.addEventListener("langchange", onChange);
    return ()=> window.removeEventListener("langchange", onChange);
  },[]);
  return lang;
}

const Brand = () => (
  <div className="brand" onClick={()=>{location.hash="#/";}}>
    <img src="/logo.png" alt="logo" />
    <span>Panela de Barro</span>
  </div>
);

function Langs() {
  const lang = useLang();
  return (
    <div className="langs" role="group" aria-label="language">
      {Object.values(LOCALES).map(l=>(
        <button key={l} className={`chip ${lang===l?"active":""}`}
          onClick={()=>setLang(l)}>{t("lang_"+l)}</button>
      ))}
    </div>
  );
}

function TopNav() {
  return (
    <nav className="topnav">
      <Brand/>
      <ul>
        <li><a href="#/about">{t("nav_about")}</a></li>
        <li><a href="#/menu">{t("nav_menu")}</a></li>
        <li><a href="#/gallery">{t("nav_gallery")}</a></li>
        <li><a href="#/wood">{t("nav_wood")}</a></li>
        <li><a href="#/location">{t("nav_location")}</a></li>
        <li><a href="#/contact">{t("nav_contact")}</a></li>
      </ul>
      <Langs/>
    </nav>
  );
}

/* ---------- HERO com splash e fumaça ---------- */
function Splash({done}) {
  return (
    <div className={`splash ${done?"hide":""}`}>
      <img src="/logo.png" alt="Panela de Barro" />
      <div className="splash-smoke"></div>
    </div>
  );
}
function Hero() {
  const lang = useLang();
  return (
    <header className="hero">
      <div className="smoke"></div>
      <div className="hero-inner">
        <h1 className="title">{t("hero_title")}</h1>
        <p className="sub">{t("hero_sub")}</p>
        <p className="soon">{t("coming_soon")}</p>
        <div style={{display:"flex",gap:12,justifyContent:"center"}}>
          <a className="btn" onClick={()=>{
            const base = location.origin + location.pathname;
            const url = `${base}?lang=${getLang()}#/menu`;
            window.open(url,"_blank");
          }}>{t("hero_cta")}</a>
          <a className="btn ghost" href="#/about">{t("nav_about")}</a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HOME: imersivo ---------- */
function ImmersiveStack() {
  useEffect(()=>{
    const obs = new IntersectionObserver((es)=>{
      es.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("show");
      });
    },{threshold:.2});
    document.querySelectorAll(".immersive").forEach(el=>obs.observe(el));
    return ()=> obs.disconnect();
  },[]);
  const captions = [
    "Amazônia – sabores de floresta e rios",
    "Cerrado – frutos, castanhas e mel",
    "Lençóis – simplicidade que encanta",
    "Litoral – mar, brisa e moquecas",
    "Serra – fogão a lenha e conforto"
  ];
  return (
    <section className="wrap immersive-stack">
      {IMMS.map((src,i)=>(
        <div key={i} className="immersive" style={{"--bg":`url(${src})`}}>
          <div className="immersive-text">{captions[i]}</div>
        </div>
      ))}
    </section>
  );
}
function Home() {
  return (
    <>
      <Hero/>
      <section className="wrap">
        <h2>{t("menu_preview")}</h2>
        <MenuGrid limit={6}/>
      </section>
      <ImmersiveStack/>
    </>
  );
}

/* ---------- MENU ---------- */
function MenuGrid({limit}) {
  const items = useMemo(()=> limit? MENU.slice(0,limit) : MENU,[limit]);
  return (
    <div className="grid">
      {items.map((m)=>(
        <article key={m.id} className="card">
          <div className="thumb" style={{backgroundImage:`url(${m.img})`}} />
          <div className="body">
            <h3>{m.name[getLang()]||m.name.pt}</h3>
            <p className="muted">{m.brief?.[getLang()]||m.brief?.pt||""}</p>
            <div>
              {m.badges?.map(b=> <span key={b} className="pill">{t(b)}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
function MenuPage(){ return (
  <section className="wrap">
    <h2>{t("menu")}</h2>
    <MenuGrid/>
  </section>
); }

/* ---------- GALLERY ---------- */
function Gallery(){
  const pics = MENU.map(m=>m.img);
  return (
    <section className="wrap">
      <h2>{t("gallery")}</h2>
      <div className="masonry">
        {pics.map((src,i)=>(
          <img key={i} src={src} alt="" loading="lazy"
               onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
        ))}
      </div>
    </section>
  );
}

/* ---------- LOCATION (mapa interativo) ---------- */
function Location(){
  const q = encodeURIComponent("Baraha Town, Doha, Qatar");
  const embed = `https://www.google.com/maps?q=${q}&output=embed`;
  const openLink = "https://maps.google.com/?q=Baraha+Town,+Doha,+Qatar";
  return (
    <section className="wrap">
      <h2>{t("location")}</h2>
      <p className="muted">{t("where")}</p>
      <div className="map-skeleton">
        <iframe
          title="map"
          src={embed}
          style={{border:0,width:"100%",height:"100%",borderRadius:20}}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <a className="btn" href={openLink} target="_blank" rel="noreferrer">{t("open_maps")}</a>
    </section>
  );
}

/* ---------- CONTACT (simples) ---------- */
function Contact(){
  return (
    <section className="wrap">
      <h2>{t("contact")}</h2>
      <div className="contact">
        <div>
          <p><strong>{t("email")}:</strong> restaurant@paneladebarroqatar.com</p>
          <p><strong>{t("phone")}:</strong> +974 3047 5279</p>
          <p><strong>{t("support")}:</strong> <a href="mailto:restaurant@paneladebarroqatar.com">restaurant@paneladebarroqatar.com</a></p>
        </div>
        <div>
          <p><strong>{t("review_title")}</strong></p>
          <div className="row">
            {Array.from({length:5}).map((_,i)=><button key={i} className="star">★</button>)}
          </div>
          <textarea rows={5} placeholder="Deixe seu comentário..." />
          <div style={{marginTop:10}}>
            <button className="btn">{t("review_cta")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About(){
  return (
    <section className="wrap">
      <h2>{t("about_title")}</h2>
      <div className="about-grid">
        <img src="/heritage/panela-artesanal.jpg" alt="" onError={e=>e.currentTarget.src="/images/placeholder.jpg"}/>
        <div>
          {t("about_long").split("\n").map((p,i)=> <p key={i}>{p}</p>)}
          <div className="team">
            <article>
              <img src="/heritage/chef-quessi.jpg" alt="" onError={e=>e.currentTarget.src="/images/placeholder.jpg"}/>
              <h4>Quessi Jhones — Chef & Proprietário</h4>
              <p>10+ anos de cozinha brasileira no GCC; raízes em Rondônia e restaurante de família em Foz do Iguaçu.</p>
            </article>
            <article>
              <img src="/heritage/chef-alex.jpg" alt="" onError={e=>e.currentTarget.src="/images/placeholder.jpg"}/>
              <h4>Alex — Head Chef</h4>
              <p>Mais de 10 anos em cozinha brasileira e italiana. Técnica, brasa e fogão a lenha.</p>
            </article>
            <article>
              <img src="/heritage/Cleusa.jpg" alt="" onError={e=>e.currentTarget.src="/images/placeholder.jpg"}/>
              <h4>Dona Cleusa — Cozinheira</h4>
              <p>25+ anos de panela; ensinamentos da mãe (descendência italiana) e raízes mineiras.</p>
            </article>
          </div>
        </div>
      </div>

      <h2 style={{marginTop:28}}>{t("nav_gallery")}: Panela de barro</h2>
      <div className="masonry">
        <img src="/heritage/panela-1.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
        <img src="/heritage/panela-2.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
        <img src="/heritage/panela-mao.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
      </div>
    </section>
  );
}

/* ---------- WOOD-FIRE (Fogão a Lenha) ---------- */
function WoodFire(){
  return (
    <section className="wrap">
      <h2>{t("wood_title")}</h2>
      {t("wood_long").split("\n").map((p,i)=><p key={i}>{p}</p>)}
      <div className="masonry">
        <img src="/heritage/fogao-1.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
        <img src="/heritage/fogao-2.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
        <img src="/heritage/fogao-3.jpg" onError={e=>e.currentTarget.src="/images/placeholder.jpg"} />
      </div>
    </section>
  );
}

/* ---------- APP ---------- */
export default function App(){
  const [page] = usePage();
  const [splashDone,setSplashDone] = useState(false);
  useEffect(()=>{
    const id = setTimeout(()=> setSplashDone(true), 1200);
    return ()=> clearTimeout(id);
  },[]);
  return (
    <>
      <Splash done={splashDone}/>
      <TopNav/>
      {page==="home" && <Home/>}
      {page==="menu" && <MenuPage/>}
      {page==="gallery" && <Gallery/>}
      {page==="location" && <Location/>}
      {page==="contact" && <Contact/>}
      {page==="about" && <About/>}
      {page==="wood" && <WoodFire/>}

      {/* botão flutuante para voltar */}
      {page!=="home" && (
        <a className="btn back-home" href="#/">{t("back_home")}</a>
      )}
    </>
  );
}
