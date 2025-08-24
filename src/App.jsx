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

// util
const openNewTab = (hash) => window.open(`${location.origin}/#/${hash.replace(/^#\/?/, "")}`, "_blank");

export default function App() {
  const [lang, setLang] = useState(getLangFromURL());
  const t = useMemo(() => STRINGS[lang], [lang]);
  const dir = lang === LOCALES.AR ? "rtl" : "ltr";

  // navegação por hash – robusta
  useEffect(() => {
    const scrollToHash = () => {
      let raw = (location.hash || "#/home").replace("#", "");
      if (raw.startsWith("/")) raw = raw.slice(1);
      const id = raw || "home";
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("hashchange", scrollToHash);
    scrollToHash();
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  // lang na URL e atributos
  useEffect(() => {
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState({}, "", u.toString());
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
  }, [lang, dir]);

  const [filter, setFilter] = useState("all");
  const items = useMemo(
    () => MENU.filter(i => filter === "all" || i.category.includes(filter)),
    [filter]
  );
  const [open, setOpen] = useState(null);

  return (
    <>
      <header>
        <nav className="nav">
          <div className="brand">
            {/* LOGO: sem /public no caminho */}
            <img src="/logo.png" alt="" />
            <span>{t.brand}</span>
          </div>
          <a href="#/about">{t.nav.about}</a>
          {/* Menu em NOVA ABA */}
          <a href="#/menu" onClick={(e)=>{e.preventDefault(); openNewTab("menu");}}>{t.nav.menu}</a>
          <a href="#/gallery">{t.nav.gallery}</a>
          <a href="#/location">{t.nav.location}</a>
          <a href="#/contact">{t.nav.contact}</a>
          <div className="lang">
            {Object.values(LOCALES).map(code => (
              <button key={code} className={code===lang?"active":""} onClick={()=>setLang(code)}>
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* HERO */}
      <div className="hero" id="home">
        <div className="slides">
          {heroImages.map((src,i)=><img key={i} src={src} alt="" loading="eager"/>)}
        </div>
        <div className="smoke"><span/><span/><span/></div>
        <div className="copy">
          <div>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.blurb}</p>
            <button className="cta" onClick={()=>openNewTab("menu")}>
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>

      {/* IMERSÃO – parallax com /public/immersive */}
      <div className="immersive" id="immersive">
        {[
          ["Amazônia","/immersive/amazonia.jpg"],
          ["Cerrado","/immersive/cerrado.jpg"],
          ["Lençóis","/immersive/lencois.jpg"],
          ["Litoral","/immersive/litoral.jpg"],
          ["Serra","/immersive/serra.jpg"],
        ].map(([label,src],i)=>(
          <div key={i} className="scene" style={{backgroundImage:`url(${src})`}}>
            <h3>{label}</h3>
          </div>
        ))}
      </div>

      {/* SOBRE */}
      <section id="about">
        <h2>{t.sections.about.title}</h2>
        <p className="lead" dangerouslySetInnerHTML={{__html:t.sections.about.lead}} />
        <p dangerouslySetInnerHTML={{__html:t.sections.about.story1}} />
        <p dangerouslySetInnerHTML={{__html:t.sections.about.story2}} />

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
            <p dangerouslySetInnerHTML={{__html:t.sections.about.alexBio}}/>
          </div>
          <div className="person">
            <img src="/images/mandioca-real.jpg" alt="" />
            <strong>{t.sections.about.chefMatriarchTitle}: Cleusa Gonçalves</strong>
            <p dangerouslySetInnerHTML={{__html:t.sections.about.cleusaBio}}/>
          </div>
        </div>
      </section>

      {/* MENU – abre em nova aba pelo header/hero; aqui deixo prévia para SEO */}
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
          ].map(([key,label])=>(
            <button key={key} className={filter===key?"active":""} onClick={()=>setFilter(key)}>{label}</button>
          ))}
        </div>
        <div className="grid">
          {items.slice(0,6).map(item=>(
            <article className="card" key={item.id}>
              <img src={item.image} alt={item.name[lang]} />
              <div className="pad">
                <div className="badge">{labelForCategory(item.category, t)}</div>
                <h3 style={{marginTop:0}}>{item.name[lang]}</h3>
                <p style={{color:"var(--muted)"}}>{item.short[lang]}</p>
                <button className="cta" onClick={()=>setOpen(item)} style={{marginTop:8}}>
                  {t.sections.menu.readMore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL prato */}
      <div className={`modal ${open?"open":""}`} onClick={()=>setOpen(null)}>
        {open && (
          <div className="sheet" onClick={e=>e.stopPropagation()}>
            <img src={open.image} alt={open.name[lang]} />
            <div className="body">
              <button className="close" onClick={()=>setOpen(null)}>{t.sections.menu.close}</button>
              <h3 style={{marginTop:0}}>{open.name[lang]}</h3>
              <p style={{color:"var(--muted)"}}>{open.long[lang]}</p>
              <div className="tags">
                <span className="tag">Halal</span>
                {open.tags?.map(tag=><span key={tag} className="tag">{prettyTag(tag,t)}</span>)}
              </div>
              <div className="kv">
                <span>{open.nutrition.kcal} {t.sections.menu.nutrition.kcal}</span>
                <span>{open.nutrition.carbs} {t.sections.menu.nutrition.carbs}</span>
                <span>{open.nutrition.protein} {t.sections.menu.nutrition.protein}</span>
                <span>{open.nutrition.fat} {t.sections.menu.nutrition.fat}</span>
              </div>
              {open.allergens?.length ? (
                <p style={{marginTop:10, fontSize:13}}>
                  <strong>{t.sections.menu.allergensKey}:</strong> {open.allergens.map(a=>prettyTag(a,t)).join(", ")}
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {/* GALERIA */}
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
            "/images/lasanha-banana.jpg",
            "/images/coxinhas-de-costela.jpg",
            "/images/galinhada-caipira.jpg"
          ].map((g,i)=><img key={i} src={g} alt="" loading="lazy"/>)}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="location">
        <h2>{t.sections.location.title}</h2>
        <p className="lead">{t.sections.location.addr}</p>
        <iframe className="map" src="https://www.google.com/maps?q=Barwa%20Town%20Doha&output=embed" loading="lazy" title="Map"></iframe>
        <small>{t.sections.location.hint}</small>
      </section>

      {/* CONTATO + REVIEW sem link quebrado */}
      <section id="contact">
        <h2>{t.sections.contact.title}</h2>
        <p><strong>{t.sections.contact.email}:</strong> restaurant@paneladebarroqatar.com</p>
        <p><strong>{t.sections.contact.phone}:</strong> +974 3047 5279</p>

        <h3 style={{marginTop:18}}>{t.sections.contact.reviewTitle}</h3>
        <form onSubmit={(e)=>{
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const name = data.get("name"); const msg = data.get("msg");
          const text = encodeURIComponent(`Review - ${name}\n\n${msg}`);
          // tenta WhatsApp; se não abrir, cai no e-mail
          window.open(`https://wa.me/97430475279?text=${text}`,"_blank") ||
          window.open(`mailto:restaurant@paneladebarroqatar.com?subject=Review&body=${text}`,"_blank");
          e.currentTarget.reset();
        }}>
          <input name="name" required placeholder="Seu nome / Your name" style="padding:10px;border-radius:8px;border:1px solid #e2d7c7;margin-right:8px" />
          <input name="msg" required placeholder="Sua avaliação / Your review" style="padding:10px;border-radius:8px;border:1px solid #e2d7c7;min-width:260px" />
          <button className="cta" type="submit" style={{marginLeft:8}}>{t.sections.contact.reviewCTA}</button>
        </form>
      </section>

      <footer>panela-de-barro-v3.vercel.app</footer>
    </>
  );
}

/* helpers */
function labelForCategory(arr,t){
  if (arr.includes("chef")) return t.sections.menu.filters.chef;
  if (arr.includes("mains")) return t.sections.menu.filters.mains;
  if (arr.includes("desserts")) return t.sections.menu.filters.desserts;
  if (arr.includes("beverages")) return t.sections.menu.filters.beverages;
  if (arr.includes("sides")) return t.sections.menu.filters.sides;
  if (arr.includes("seasonal")) return t.sections.menu.filters.seasonal;
  return t.sections.menu.filters.all;
}
function prettyTag(tag,t){
  const m=t.sections.menu.tags;
  return ({
    halal:m.halal, gluten:m.gluten, dairy:m.dairy, nuts:m.nuts, soy:m.soy,
    spicy:m.spicy, seafood:m.seafood, vegetarian:m.vegetarian, vegan:m.vegan,
    "gluten-free":"Gluten-free"
  })[tag]||tag;
}
function getLangFromURL(){
  const p=new URLSearchParams(location.search); const v=(p.get("lang")||"").toLowerCase();
  return v==="en"?"en":v==="ar"?"ar":"pt";
}
