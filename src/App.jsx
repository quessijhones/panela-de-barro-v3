import React, { useMemo, useState, useEffect } from "react";
import { LOCALES, STRINGS, t, getLocale, setLocale } from "./i18n";
import { MENU, CATEGORIES } from "./menuData";

function cls(...a){return a.filter(Boolean).join(" ");}

// ===== Error Boundary para nunca mais tela vazia =====
class ErrorBoundary extends React.Component {
  constructor(p){ super(p); this.state={err:null}; }
  static getDerivedStateFromError(err){ return {err}; }
  render(){
    if(this.state.err){
      return (
        <div className="error-box">
          <h2>Ops — houve um erro na página</h2>
          <pre>{String(this.state.err)}</pre>
          <button onClick={()=>{ this.setState({err:null}); location.reload(); }}>
            Tentar de novo
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ===== Navegação por hash =====
const ROUTES = ["/", "/about", "/menu", "/gallery", "/location", "/contact"];
function useRoute(){
  const [hash,setHash]=useState(location.hash.replace("#","")||"/");
  useEffect(()=>{
    const f=()=>setHash(location.hash.replace("#","")||"/");
    window.addEventListener("hashchange",f); return ()=>window.removeEventListener("hashchange",f);
  },[]);
  return ROUTES.includes(hash)?hash:"/";
}
function goto(h){ location.hash = h; }

// ===== Cabeçalho =====
function Header(){
  const lang = getLocale();
  const NavLink = ({to, children}) => (
    <button className={cls("nav-link", location.hash===`#${to}` && "active")} onClick={()=>goto(to)}>
      {children}
    </button>
  );
  return (
    <header className="header">
      <div className="brand" onClick={()=>goto("/")}>
        <img src="/logo.png" alt="logo" />
        <div>
          <b>{t("brand")}</b>
        </div>
      </div>
      <nav>
        <NavLink to="/about">{t("nav.about")}</NavLink>
        <NavLink to="/menu">{t("nav.menu")}</NavLink>
        <NavLink to="/gallery">{t("nav.gallery")}</NavLink>
        <NavLink to="/location">{t("nav.location")}</NavLink>
        <NavLink to="/contact">{t("nav.contact")}</NavLink>
      </nav>
      <div className="langs">
        {Object.values(LOCALES).map(code=>(
          <button key={code}
            className={cls("chip", lang===code && "chip--active")}
            onClick={()=>{ setLocale(code); location.reload(); }}>
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}

// ===== Herói com carrossel + fumaça =====
function Hero(){
  const images=[
    "/images/vaca-atolada.jpg",
    "/images/feijoada-costela.jpg",
    "/images/picanha-grelhada.jpg"
  ];
  const [i,setI]=useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setI(p=>(p+1)%images.length), 5000);
    return ()=>clearInterval(id);
  },[]);
  return (
    <section className="hero">
      <img key={i} className="hero-bg" src={images[i]} alt="" />
      <div className="smoke"></div>
      <div className="hero-content">
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
        <button className="cta" onClick={()=>goto("/menu")}>{t("hero.cta")}</button>
      </div>
    </section>
  );
}

// ===== Cartão de prato + Modal =====
function Badge({name}) { return <span className="badge">{t(`badges.${name}`)||name}</span>; }

function DishCard({dish,onOpen}) {
  const lang=getLocale();
  return (
    <article className="card" onClick={()=>onOpen(dish)}>
      <img src={dish.img} alt={dish.name[lang]} loading="lazy"/>
      <div className="card-body">
        <div className="card-title">{dish.name[lang]} <Badge name={dish.category===CATEGORIES.CHEF?"chef":dish.category}/></div>
        <div className="card-sub">{dish.short[lang]}</div>
        <div className="card-tags">
          {dish.tags.map(tag=><Badge key={tag} name={tag}/>)}
        </div>
      </div>
    </article>
  );
}

function DishModal({dish,onClose}){
  const lang=getLocale();
  if(!dish) return null;
  const n = dish.nutrition||{};
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" onClick={e=>e.stopPropagation()}>
        <img src={dish.img} alt="" />
        <div className="modal-body">
          <div className="modal-title">
            <h3>{dish.name[lang]}</h3>
            <div className="tags-inline">
              {dish.tags.map(tag=><Badge key={tag} name={tag} />)}
            </div>
          </div>
          <p className="long">{dish.long[lang]}</p>
          <div className="nutrition">
            <div><b>{n.kcal||0}</b> {t("nutrition.kcal")}</div>
            <div><b>{n.carbs||0}g</b> {t("nutrition.carbs")}</div>
            <div><b>{n.protein||0}g</b> {t("nutrition.protein")}</div>
            <div><b>{n.fat||0}g</b> {t("nutrition.fat")}</div>
          </div>
          <button className="close" onClick={onClose}>{t("close")}</button>
        </div>
      </div>
    </div>
  );
}

// ===== Seções =====
function Section({id,title,children}) {
  return (
    <section id={id} className="section">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

function HomePreview({onOpen}){
  const lang=getLocale();
  return (
    <>
      <Hero/>
      <Section id="menu-preview" title={`${t("pages.menu.title")} (prévia)`}>
        <div className="grid">
          {MENU.slice(0,6).map(d => <DishCard key={d.id} dish={d} onOpen={onOpen}/>)}
        </div>
      </Section>
    </>
  );
}

function MenuPage(){
  const [filter,setFilter]=useState("all");
  const [open,setOpen]=useState(null);
  const lang=getLocale();

  const filtered = useMemo(()=>{
    if(filter==="all") return MENU;
    return MENU.filter(d=>d.category===filter);
  },[filter]);

  const chips = [
    {id:"all", label:t("pages.menu.filters.all")},
    {id:CATEGORIES.MAINS, label:t("badges.mains")},
    {id:CATEGORIES.SIDES, label:t("badges.sides")},
    {id:CATEGORIES.DESSERTS, label:t("badges.desserts")},
    {id:CATEGORIES.BEVERAGES, label:t("badges.beverages")},
    {id:CATEGORIES.SEASONAL, label:t("badges.seasonal")},
    {id:CATEGORIES.CHEF, label:t("badges.chef")}
  ];

  return (
    <>
      <Section id="menu" title={t("pages.menu.title")}>
        <div className="chips">
          {chips.map(c=>(
            <button key={c.id}
              className={cls("chip", filter===c.id&&"chip--active")}
              onClick={()=>setFilter(c.id)}>{c.label}</button>
          ))}
        </div>
        <div className="grid">
          {filtered.map(d=><DishCard key={d.id} dish={d} onOpen={setOpen}/>)}
        </div>
      </Section>
      <DishModal dish={open} onClose={()=>setOpen(null)} />
    </>
  );
}

function GalleryPage(){
  const items=[
    "/images/vaca-atolada.jpg","/images/feijoada-costela.jpg","/images/picanha-grelhada.jpg",
    "/images/moqueca-baiana.jpg","/images/pamonha.jpg","/images/sol-do-cerrado.jpg"
  ];
  return (
    <Section id="gallery" title={t("pages.gallery.title")}>
      <div className="masonry">
        {items.map((src,i)=>(
          <img key={i} src={src} loading="lazy" alt="" />
        ))}
      </div>
    </Section>
  );
}

function AboutPage(){
  const page = STRINGS[getLocale()].pages.about;
  return (
    <Section id="about" title={page.title}>
      <p className="lead">{page.intro}</p>
      <p>{page.whyClay}</p>
      <h3 className="mt">{page.foundersTitle}</h3>
      <div className="team">
        {page.owners.map(p=>(
          <div key={p.name} className="person">
            <img src={p.img} alt={p.name}/>
            <div>
              <h4>{p.name}</h4>
              <p>{p.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function LocationPage(){
  const page = STRINGS[getLocale()].pages.location;
  return (
    <Section id="location" title={page.title}>
      <p><b>{page.where}</b></p>
      <p>{page.soon}</p>
      <div className="mapph"></div>
    </Section>
  );
}

function ContactPage(){
  const page = STRINGS[getLocale()].pages.contact;
  return (
    <Section id="contact" title={page.title}>
      <div className="contact">
        <div><b>{page.email}:</b> restaurant@paneladebarroqatar.com</div>
        <div><b>{page.phone}:</b> +974 3047 5279</div>
        <a className="review" href="mailto:restaurant@paneladebarroqatar.com?subject=Review%20Panela%20de%20Barro">
          {page.review}
        </a>
      </div>
    </Section>
  );
}

// ===== App (router) =====
export default function App(){
  const route = useRoute();
  const [open,setOpen]=useState(null);
  return (
    <ErrorBoundary>
      <Header/>
      <main>
        {route==="/" && <HomePreview onOpen={setOpen}/>}
        {route==="/about" && <AboutPage/>}
        {route==="/menu" && <MenuPage/>}
        {route==="/gallery" && <GalleryPage/>}
        {route==="/location" && <LocationPage/>}
        {route==="/contact" && <ContactPage/>}
      </main>
      <DishModal dish={open} onClose={()=>setOpen(null)} />
      <footer className="footer">
        panela-de-barro-v3.vercel.app
      </footer>
    </ErrorBoundary>
  );
}
