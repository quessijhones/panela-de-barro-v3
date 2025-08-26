// src/App.jsx
import React, { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { LOCALES, getLang, setLang, onLangChange, t } from "./i18n";
import { MENU } from "./menuData"; // <— IMPORT NOMEADO: corrige o erro do build

// imagens para a seção imersiva (já estão em public/immersive)
const IMMS = ["amazonia", "cerrado", "lencois", "litoral", "serra"].map(
  (n) => `/immersive/${n}.jpg`
);

function useLang() {
  const [lang, set] = useState(getLang());
  useEffect(() => onLangChange(set), []);
  return lang;
}

function useRoute() {
  const [route, setRoute] = useState(location.hash.replace("#/", "") || "home");
  useEffect(() => {
    const on = () => setRoute(location.hash.replace("#/", "") || "home");
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

/* ========== UI PRIMITIVES ========== */

function LangPills() {
  const lang = useLang();
  return (
    <div className="lang-pills">
      {Object.keys(LOCALES).map((code) => (
        <button
          key={code}
          className={`pill ${lang === code ? "active" : ""}`}
          onClick={() => setLang(code)}
          aria-label={`Switch to ${code}`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const lang = useLang();
  const Item = ({ href, children }) => (
    <a className="nav-link" href={href + `?lang=${lang}`}>
      {children}
    </a>
  );
  return (
    <header className="nav">
      <a className="brand" href={`#/?lang=${lang}`}>
        <img src="/logo.png" alt="" className="brand-logo" />
        {t("brand")}
      </a>
      <nav>
        <Item href="#/about">{t("nav.about")}</Item>
        <Item href="#/menu">{t("nav.menu")}</Item>
        <Item href="#/gallery">{t("nav.gallery")}</Item>
        <Item href="#/woodfire">{t("nav.woodfire")}</Item>
        <Item href="#/location">{t("nav.location")}</Item>
        <Item href="#/contact">{t("nav.contact")}</Item>
      </nav>
      <LangPills />
    </header>
  );
}

function LogoSplash() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(id);
  }, []);
  if (!show) return null;
  return (
    <div className="splash">
      <img src="/logo.png" alt="Panela de Barro" />
    </div>
  );
}

function SmokeOverlay() {
  return (
    <div className="smoke">
      <div className="smoke__c1" />
      <div className="smoke__c2" />
      <div className="smoke__c3" />
    </div>
  );
}

/* ========== PÁGINAS ========== */

function Hero() {
  const lang = useLang();
  const openNewTab = () => window.open(`#/menu?lang=${lang}`, "_blank");
  return (
    <section className="hero">
      <img className="hero-bg" src="/images/vaca-atolada.jpg" alt="" />
      <SmokeOverlay />
      <div className="hero-content">
        <h1>{t("hero.title")}</h1>
        <p className="muted">{t("hero.subtitle")}</p>
        <p className="coming-soon">{t("hero.comingSoon")}</p>
        <button className="btn" onClick={openNewTab}>{t("hero.cta")}</button>
      </div>
    </section>
  );
}

function ImmersiveStrips() {
  useEffect(() => {
    const els = document.querySelectorAll(".imm-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section className="immersive">
      {IMMS.map((src, i) => (
        <div className="imm-item" key={i} style={{ backgroundImage: `url(${src})` }} />
      ))}
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ImmersiveStrips />
      <HomePreview />
    </>
  );
}

function badgeLabel(code) {
  return t(`menu.badges.${code}`) || code;
}

function HomePreview() {
  const lang = useLang();
  const items = useMemo(() => MENU.slice(0, 6), []);
  return (
    <section className="section">
      <h2>{t("menu.preview")}</h2>
      <div className="grid">
        {items.map((it) => (
          <Card key={it.id} item={it} lang={lang} />
        ))}
      </div>
      <div style={{ textAlign:"center", marginTop:24 }}>
        <a className="btn ghost" href={`#/menu?lang=${lang}`} target="_blank" rel="noreferrer">
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}

function Card({ item, lang, onOpen }) {
  const L = item.i18n[lang];
  return (
    <article className="card" onClick={() => onOpen?.(item)}>
      <img src={item.img} alt={L.name} loading="lazy"/>
      <div className="card-bdy">
        <h4>{L.name}</h4>
        <p className="muted">{L.desc}</p>
        <div className="badges">
          {item.tags.map((b) => (
            <span key={b} className="bdg">{badgeLabel(b)}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function MenuPage() {
  const lang = useLang();
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const list = MENU.filter((m) => (filter==="all" ? true : m.cat===filter || m.flags.includes(filter)));

  return (
    <section className="section">
      <h2>{t("menu.title")}</h2>
      <div className="filters">
        {["all","mains","sides","desserts","beverages","seasonal","chef"].map((f)=>(
          <button key={f} className={`pill ${filter===f?"active":""}`} onClick={()=>setFilter(f)}>
            {t(`menu.filters.${f}`)}
          </button>
        ))}
        <a className="pill" href="#/?lang="+lang style={{marginLeft:'auto'}}>{t("nav.back")}</a>
      </div>

      <div className="grid">
        {list.map((it)=>(
          <Card key={it.id} item={it} lang={lang} onOpen={setOpen}/>
        ))}
      </div>

      {open && <Modal item={open} lang={lang} onClose={()=>setOpen(null)} />}
    </section>
  );
}

function Modal({ item, lang, onClose }) {
  const I = item.i18n[lang];
  const N = item.nutrition;
  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>
        <img className="modal-img" src={item.img} alt={I.name}/>
        <h3>{I.name}</h3>
        <p className="muted">{I.long || I.desc}</p>
        <h5>{t("menu.modal.nutrition")}</h5>
        <ul className="nutri">
          <li>{N.kcal} {t("menu.modal.kcals")}</li>
          <li>{t("menu.modal.carbs")}: {N.carbs}g</li>
          <li>{t("menu.modal.protein")}: {N.protein}g</li>
          <li>{t("menu.modal.fat")}: {N.fat}g</li>
          <li>{t("menu.modal.sodium")}: {N.sodium}mg</li>
        </ul>
      </div>
    </div>
  );
}

function GalleryPage() {
  const imgs = MENU.slice(0, 12).map(m => m.img);
  return (
    <section className="section">
      <h2>{t("gallery.title")}</h2>
      <div className="grid gallery">
        {imgs.map((src, i)=>(
          <img key={i} src={src} alt="" loading="lazy" className="fade-in"/>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  const lang = useLang();
  const B = t("about.blocks");
  return (
    <section className="section">
      <a className="pill" href={`#/?lang=${lang}`}>{t("nav.back")}</a>
      <h2>{t("about.title")}</h2>
      {B.map((p, i)=>(<p key={i} className="lead">{p}</p>))}
      <div className="about-photos">
        <img src="/images/panelas.jpg" alt="panelas de barro" onError={(e)=>e.target.style.display='none'}/>
        <img src="/images/panela-artesanal.jpg" alt="artesanato do barro" onError={(e)=>e.target.style.display='none'}/>
      </div>

      <h3 style={{marginTop:24}}>{t("about.teamTitle")}</h3>
      <div className="team">
        <div className="person">
          <img src="/images/chef-quessi.jpg" alt="" onError={(e)=>e.target.style.display='none'}/>
          <h4>{t("about.team.quessi.name")}</h4>
          <p className="muted">{t("about.team.quessi.blurb")}</p>
        </div>
        <div className="person">
          <img src="/images/chef-alex.jpg" alt="" onError={(e)=>e.target.style.display='none'}/>
          <h4>{t("about.team.alex.name")}</h4>
          <p className="muted">{t("about.team.alex.blurb")}</p>
        </div>
        <div className="person">
          <img src="/images/dona-cleusa.jpg" alt="" onError={(e)=>e.target.style.display='none'}/>
          <h4>{t("about.team.cleusa.name")}</h4>
          <p className="muted">{t("about.team.cleusa.blurb")}</p>
        </div>
      </div>
    </section>
  );
}

function WoodfirePage() {
  const lang = useLang();
  const T = t("woodfire.text");
  return (
    <section className="section">
      <a className="pill" href={`#/?lang=${lang}`}>{t("nav.back")}</a>
      <h2>{t("woodfire.title")}</h2>
      {T.map((p,i)=>(<p key={i} className="lead">{p}</p>))}
      <div className="grid gallery">
        {["fogao1.jpg","fogao2.jpg","fogao3.jpg"].map((n,i)=>(
          <img key={i} src={`/woodfire/${n}`} alt="" onError={(e)=>e.target.style.display='none'} loading="lazy"/>
        ))}
      </div>
    </section>
  );
}

function LocationPage() {
  const lang = useLang();
  const q = encodeURIComponent(t("location.address"));
  return (
    <section className="section">
      <a className="pill" href={`#/?lang=${lang}`}>{t("nav.back")}</a>
      <h2>{t("location.title")}</h2>
      <p className="lead">{t("location.address")} (Baraha Town)</p>
      <div className="map-box">
        <iframe
          title="map"
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function ContactPage() {
  const lang = useLang();
  return (
    <section className="section">
      <a className="pill" href={`#/?lang=${lang}`}>{t("nav.back")}</a>
      <h2>{t("contact.title")}</h2>
      <div className="grid contact">
        <a className="card link" href="mailto:restaurant@paneladebarroqatar.com">✉ {t("contact.email")}</a>
        <a className="card link" href="tel:+97430475279">📞 {t("contact.phone")}: +974 3047 5279</a>
        <a className="card link primary" href="https://wa.me/97430475279" target="_blank" rel="noreferrer">💬 {t("contact.supportCta")}</a>
      </div>
    </section>
  );
}

/* ========== APP SHELL / ROUTER ========== */

export default function App() {
  const route = useRoute();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [route]);

  return (
    <>
      <LogoSplash />
      <Nav />
      <main>
        {route === "home" && <Home />}
        {route === "menu" && <MenuPage />}
        {route === "gallery" && <GalleryPage />}
        {route === "about" && <AboutPage />}
        {route === "woodfire" && <WoodfirePage />}
        {route === "location" && <LocationPage />}
        {route === "contact" && <ContactPage />}
      </main>
      <footer className="footer">{/* removido texto do domínio */}</footer>
    </>
  );
}