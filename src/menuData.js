import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, STRINGS, getLang, setLang } from "./i18n.js";
import { MENU } from "./menuData.js";

/* ===== imagens imersivas (use o que já tem em /public/immersive) ===== */
const IMMS = ["amazonia","cerrado","lencois","litoral","serra"].map(n=>`/immersive/${n}.jpg`);

/* ===== helpers ===== */
const useRoute = () => {
  const parse = () => (window.location.hash.replace("#/","") || "home");
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const fn = () => setRoute(parse());
    window.addEventListener("hashchange", fn);
    return () => window.removeEventListener("hashchange", fn);
  }, []);
  return [route, (r)=>{ window.location.hash = `/${r}`; }];
};
const useLang = () => {
  const [lang, set] = useState(getLang());
  useEffect(() => {
    const h = (e)=> set(e.detail.lang);
    window.addEventListener("langchange", h);
    return () => window.removeEventListener("langchange", h);
  }, []);
  return [lang, (l)=>{ setLang(l); /* atualiza URL sem recarregar */ }];
};
const t = (lang, path) => {
  const parts = path.split(".");
  return parts.reduce((acc,k)=> (acc && acc[k] != null ? acc[k] : ""), STRINGS[lang]);
};
const Tag = ({children}) => <span className="tag">{children}</span>;

/* ===== Splash do logo ===== */
const Splash = () => {
  const [hide, setHide] = useState(false);
  useEffect(()=>{ const id=setTimeout(()=>setHide(true), 1200); return ()=>clearTimeout(id); },[]);
  return <div id="splash" className={hide?"hide":""}><div className="logo"></div></div>;
};

/* ===== Header ===== */
const Header = ({lang, onLang}) => {
  const pill = (code) => (
    <a href={`/?lang=${code}${window.location.hash || "#/home"}`}
       onClick={(e)=>{e.preventDefault(); onLang(code);}}
       className={`pill ${lang===code?"active":""}`}>{LOCALES[code]}</a>
  );
  return (
    <header className="header">
      <div className="container nav">
        <a href="/?lang=pt#/" onClick={(e)=>{e.preventDefault(); onLang(lang); window.location.hash="/home";}}>
          <img src="/logo.png" alt="logo" style={{width:28,verticalAlign:"middle",marginRight:8}}/>
          <strong>Panela de Barro</strong>
        </a>
        <a href={`/?lang=${lang}#/about`}>{t(lang,"nav.about")}</a>
        <a href={`/?lang=${lang}#/menu`}>{t(lang,"nav.menu")}</a>
        <a href={`/?lang=${lang}#/gallery`}>{t(lang,"nav.gallery")}</a>
        <a href={`/?lang=${lang}#/location`}>{t(lang,"nav.location")}</a>
        <a href={`/?lang=${lang}#/contact`}>{t(lang,"nav.contact")}</a>
        <a href={`/?lang=${lang}#/support`}>{t(lang,"nav.support")}</a>
        <div className="spacer"></div>
        <div className="pills">
          {pill("pt")}{pill("en")}{pill("ar")}
        </div>
      </div>
    </header>
  );
};

/* ===== Seções ===== */
const Hero = ({lang}) => (
  <section className="container">
    <div className="hero">
      <img src="/images/vaca-atolada.jpg" alt="" />
      <div className="smoke"></div>
      <div className="content">
        <h1>{t(lang,"home.headline")}</h1>
        <div>{t(lang,"home.sub")}</div>
        <div className="small" style={{opacity:.9, marginTop:6}}>{t(lang,"home.coming")}</div>
        <a className="btn" href={`/?lang=${lang}#/menu`}>{t(lang,"home.cta")}</a>
      </div>
    </div>
  </section>
);

const ImmersiveStrip = () => {
  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("show"); }});
    },{threshold:.2});
    document.querySelectorAll(".immersive").forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
  return (
    <section className="container">
      {IMMS.map((src, i)=>(
        <div className="immersive" key={i}>
          <img src={src} alt="" />
          <div className="shade"></div>
          <div className="caption">Brasil • {["Amazônia","Cerrado","Lençóis","Litoral","Serra"][i]}</div>
        </div>
      ))}
    </section>
  );
};

const MenuPage = ({lang}) => {
  const [filter, setFilter] = useState("all");
  const labels = { all:"menu.all", mains:"menu.mains", sides:"menu.sides", desserts:"menu.desserts", beverages:"menu.beverages", seasonal:"menu.seasonal", chefs:"menu.chefs" };
  const cats = Object.keys(labels);
  const items = useMemo(()=> (filter==="all" ? MENU : MENU.filter(m=>m.cat===filter)), [filter]);

  const toTag = (k) => t(lang, `tags.${k}`) || k;

  return (
    <div className="container">
      <h2 className="section-title">{t(lang,"menu.title")}</h2>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16}}>
        {cats.map(c=>(
          <button key={c} className={`pill ${filter===c?"active":""}`} onClick={()=>setFilter(c)}>{t(lang,labels[c])}</button>
        ))}
      </div>
      <div className="grid">
        {items.map(m=>(
          <div className="card" key={m.id}>
            <img src={m.img} alt={m.name[lang] || m.name.pt} loading="lazy"/>
            <div className="body">
              <div className="h6"><strong>{m.name[lang] || m.name.pt}</strong></div>
              <div className="small">{m.short[lang] || m.short.pt}</div>
              <div className="tags">
                {m.tags?.map((g,i)=><Tag key={i}>{toTag(g)}</Tag>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = ({lang}) => (
  <div className="container">
    <h2 className="section-title">{t(lang,"gallery.title")}</h2>
    <div className="grid">
      {MENU.slice(0,9).map(m=>(
        <div className="card" key={m.id}>
          <img src={m.img} alt="" loading="lazy"/>
          <div className="body"><div className="small">{m.name[lang] || m.name.pt}</div></div>
        </div>
      ))}
    </div>
  </div>
);

const Location = ({lang}) => (
  <div className="container">
    <h2 className="section-title">{t(lang,"location.title")}</h2>
    <p><strong>{t(lang,"location.address")}</strong></p>
    <div className="card" style={{overflow:"hidden"}}>
      <div className="body">
        <div className="small" style={{marginBottom:8}}>{t(lang,"location.mapsSoon")}</div>
        <div style="display:none"></div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Baraha+Town,+Doha,+Qatar&hl=en&z=14&output=embed"
        width="100%" height="360" style={{border:0}} loading="lazy" allowFullScreen></iframe>
    </div>
    <a className="pill" href={`/?lang=${lang}#/home`} style={{marginLeft:"auto",display:"inline-block",marginTop:16}}>
      {t(lang,"nav.back")}
    </a>
  </div>
);

const Contact = ({lang}) => (
  <div className="container">
    <h2 className="section-title">{t(lang,"contact.title")}</h2>
    <div className="card"><div className="body">
      <p><strong>{t(lang,"contact.email")}:</strong> restaurant@paneladebarroqatar.com</p>
      <p><strong>{t(lang,"contact.phone")}:</strong> +974 3047 5279</p>
    </div></div>
    <a className="pill" href={`/?lang=${lang}#/home`} style={{marginLeft:"auto",display:"inline-block",marginTop:16}}>
      {t(lang,"nav.back")}
    </a>
  </div>
);

const Support = ({lang}) => (
  <div className="container">
    <h2 className="section-title">{t(lang,"support.title")}</h2>
    <p className="small">{t(lang,"support.blurb")}</p>
    <div className="grid">
      <div className="card"><div className="body">
        <div className="h6"><strong>Google Maps</strong></div>
        <p className="small">Deixe sua avaliação.</p>
        <a className="btn" href="https://www.google.com/maps/search/?api=1&query=Baraha+Town+Doha+Qatar" target="_blank">Open</a>
      </div></div>
      <div className="card"><div className="body">
        <div className="h6"><strong>Instagram</strong></div>
        <p className="small">Siga e compartilhe.</p>
        <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>@paneladebarro</a>
      </div></div>
      <div className="card"><div className="body">
        <div className="h6"><strong>WhatsApp</strong></div>
        <p className="small">Dúvidas e reservas (em breve).</p>
        <a className="btn" href="https://wa.me/97430475279" target="_blank">Abrir</a>
      </div></div>
    </div>
    <a className="pill" href={`/?lang=${lang}#/home`} style={{marginLeft:"auto",display:"inline-block",marginTop:16}}>
      {t(lang,"