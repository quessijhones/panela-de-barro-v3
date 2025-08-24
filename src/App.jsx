// src/App.jsx
import "./styles.css";
import { MENU } from "./menuData";
import { LOCALES, STRINGS } from "./i18n";
import { useEffect, useMemo, useState } from "react";

const heroImages = [
  "/images/vaca-atolada.jpg",
  "/images/feijoada-costela.jpg",
  "/images/picanha-grelhada.jpg"
];

export default function App() {
  const [lang, setLang] = useState(getLangFromURL());
  const t = useMemo(() => STRINGS[lang], [lang]);
  const dir = lang === LOCALES.AR ? "rtl" : "ltr";

  // hash navigation that REALLY scrolls
  useEffect(() => {
    const apply = () => {
      const raw = window.location.hash.replace("#", "");
      const id = raw.startsWith("/") ? raw.slice(1) : raw;
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", apply);
    // also run on mount
    apply();
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  // keep lang in URL
  useEffect(() => {
    const u = new URL(window.location.href);
    u.searchParams.set("lang", lang);
    window.history.replaceState({}, "", u.toString());
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang, dir]);

  const [filter, setFilter] = useState("all");
  const items = useMemo(() => {
    return MENU.filter(i => filter === "all" || i.category.includes(filter));
  }, [filter]);

  const [open, setOpen] = useState(null);

  return (
    <>
      <header>
        <nav className="nav">
          <div className="brand">
            <img src="/public/logo.png" alt="" />
            <span>{t.brand}</span>
          </div>
          {navLink("#about", t.nav.about)}
          {navLink("#menu", t.nav.menu)}
          {navLink("#gallery", t.nav.gallery)}
          {navLink("#location", t.nav.location)}
          {navLink("#contact", t.nav.contact)}
          <div className="lang">
            {Object.values(LOCALES).map(code => (
              <button
                key={code}
                className={code === lang ? "active" : ""}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <div className="hero" id="home">
        <div className="slides">
          {heroImages.map((src, i) => (
            <img key={i} src={src} alt="" loading="eager" />
          ))}
        </div>
        <div className="smoke">
          <span></span><span></span><span></span>
        </div>
        <div className="copy">
          <div>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.blurb}</p>
            <button
              className="cta"
              onClick={() => (window.location.hash = "#menu")}
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <h2>{t.sections.about.title}</h2>
        <p className="lead" dangerouslySetInnerHTML={{ __html: t.sections.about.lead }} />
        <p dangerouslySetInnerHTML={{ __html: t.sections.about.story1 }} />
        <p dangerouslySetInnerHTML={{ __html: t.sections.about.story2 }} />

        <h3 style={{marginTop:18}}>{t.sections.about.teamTitle}</h3>
        <div className="team">
          <div className="person">
            <img src="/images/encanto-de-coco.jpg" alt="" />
            <strong>{t.sections.about.ownerTitle}: Quessi Jhones</strong>
            <p>10 anos em hospitalidade; 6 em cozinha brasileira (Abu Dhabi & Qatar). Curadoria de sabores de fazenda e fogo.</p>
          </div>
          <div className="person">
            <img src="/images/fraldinha-inteira.jpg" alt="" />
            <strong>{t.sections.about.headChefTitle}: Alex</strong>
            <p dangerouslySetInnerHTML={{ __html: t.sections.about.alexBio }} />
          </div>
          <div className="person">
            <img src="/images/mandioca-real.jpg" alt="" />
            <strong>{t.sections.about.chefMatriarchTitle}: Cleusa Gonçalves</strong>
            <p dangerouslySetInnerHTML={{ __html: t.sections.about.cleusaBio }} />
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu">
        <h2>{t.sections.menu.title}</h2>
        <div className="chips">
          {[
            ["all", t.sections.menu.filters.all],
            ["mains", t.sections.menu.filters.mains],
            ["sides", t.sections.menu.filters.sides],
            ["desserts", t.sections.menu.filters.desserts],
            ["beverages", t.sections.menu.filters.beverages],
            ["seasonal", t.sections.menu.filters.seasonal],
            ["chef", t.sections.menu.filters.chef],
          ].map(([key, label]) => (
            <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{label}</button>
          ))}
        </div>

        <div className="grid">
          {items.map(item => (
            <article className="card" key={item.id}>
              <img src={item.image} alt={item.name[lang]} />
              <div className="pad">
                <div className="badge">{labelForCategory(item.category, t)}</div>
                <h3 style={{marginTop:0}}>{item.name[lang]}</h3>
                <p style={{color:"var(--muted)"}}>{item.short[lang]}</p>
                <button className="cta" onClick={() => setOpen(item)} style={{marginTop:8}}>
                  {t.sections.menu.readMore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL dish */}
      <div className={`modal ${open ? "open" : ""}`} onClick={() => setOpen(null)}>
        {open && (
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <img src={open.image} alt={open.name[lang]} />
            <div className="body">
              <button className="close" onClick={() => setOpen(null)}>{t.sections.menu.close}</button>
              <h3 style={{marginTop:0}}>{open.name[lang]}</h3>
              <p style={{color:"var(--muted)"}}>{open.long[lang]}</p>
              <div className="tags">
                <span className="tag">Halal</span>
                {open.tags?.map(tag => <span key={tag} className="tag">{prettyTag(tag, t)}</span>)}
              </div>
              <div className="kv">
                <span>{open.nutrition.kcal} {t.sections.menu.nutrition.kcal}</span>
                <span>{open.nutrition.carbs} {t.sections.menu.nutrition.carbs}</span>
                <span>{open.nutrition.protein} {t.sections.menu.nutrition.protein}</span>
                <span>{open.nutrition.fat} {t.sections.menu.nutrition.fat}</span>
              </div>
              {open.allergens?.length ? (
                <p style={{marginTop:10, fontSize:13}}>
                  <strong>{t.sections.menu.allergensKey}:</strong> {open.allergens.map(a => prettyTag(a, t)).join(", ")}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* GALLERY */}
      <section id="gallery">
        <h2>{t.sections.gallery.title}</h2>
        <div className="gallery">
          {[
            "/images/encanto-de-coco.jpg",
            "/images/picanha-grelhada.jpg",
            "/images/feijoada-costela.jpg",
            "/images/pao-de-queijo.jpg",
            "/images/mandioca-frita.jpg",
            "/images/sol-do-cerrado.jpg",
            "/images/lasanha-banana.jpg"
          ].map((g,i)=> <img key={i} src={g} alt="" loading="lazy"/>)}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location">
        <h2>{t.sections.location.title}</h2>
        <p className="lead">{t.sections.location.addr}</p>
        <iframe
          className="map"
          src="https://www.google.com/maps?q=Barwa%20Town%20Doha&output=embed"
          loading="lazy"
          title="Map"
          onClick={()=>window.open("https://maps.google.com/?q=Barwa+Town+Doha","_blank")}
        ></iframe>
        <small>{t.sections.location.hint}</small>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>{t.sections.contact.title}</h2>
        <p><strong>{t.sections.contact.email}:</strong> restaurant@paneladebarroqatar.com</p>
        <p><strong>{t.sections.contact.phone}:</strong> +974 3047 5279</p>
        <h3 style={{marginTop:18}}>{t.sections.contact.reviewTitle}</h3>
        <p><a href="https://forms.gle/" target="_blank">{t.sections.contact.reviewCTA}</a></p>
      </section>

      <footer>panela-de-barro-v3.vercel.app</footer>
    </>
  );
}

function navLink(href, label){ return <a href={href}>{label}</a>; }

function labelForCategory(arr, t){
  if (arr.includes("chef")) return t.sections.menu.filters.chef;
  if (arr.includes("mains")) return t.sections.menu.filters.mains;
  if (arr.includes("desserts")) return t.sections.menu.filters.desserts;
  if (arr.includes("beverages")) return t.sections.menu.filters.beverages;
  if (arr.includes("sides")) return t.sections.menu.filters.sides;
  if (arr.includes("seasonal")) return t.sections.menu.filters.seasonal;
  return t.sections.menu.filters.all;
}

function prettyTag(tag, t){
  const m = t.sections.menu.tags;
  return ({
    halal: m.halal, gluten: m.gluten, dairy: m.dairy, nuts: m.nuts, soy: m.soy,
    spicy: m.spicy, seafood: m.seafood, vegetarian: m.vegetarian, vegan: m.vegan,
    "gluten-free": "Gluten-free"
  })[tag] || tag;
}

function getLangFromURL(){
  const p = new URLSearchParams(window.location.search);
  const v = (p.get("lang")||"").toLowerCase();
  return v === "en" ? "en" : v === "ar" ? "ar" : "pt";
}
