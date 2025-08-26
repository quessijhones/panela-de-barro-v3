import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, STRINGS, getLangFromURL } from "./i18n";
import { MENU } from "./menuData";
import "./styles.css";

const IMMERSIVE = ["/immersive/amazonia.jpg","/immersive/cerrado.jpg","/immersive/lencois.jpg","/immersive/litoral.jpg","/immersive/serra.jpg"];

function useHashRoute() {
  const parse = () => {
    const raw = window.location.hash || "#/home";
    const path = raw.replace(/^#\//,"").split("?")[0];
    return path || "home";
    };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (r)=>{ window.location.hash = `/${r}`; }];
}

function useLang() {
  const [lang, setLang] = useState(getLangFromURL());
  const t = useMemo(()=>STRINGS[lang], [lang]);

  const selectLang = (l) => {
    const u = new URL(window.location.href);
    u.searchParams.set("lang", l);
    window.history.replaceState(null,"",u.toString());
    setLang(l);
  };
  return { lang, t, selectLang };
}

/* ---------- UI BASICS ---------- */
const Badge = ({children}) => <span className="badge">{children}</span>;
const Section = ({title, children, t}) => (
  <section className="container">
    <div className="sectionHeader">
      <h2>{title}</h2>
      <a className="backLink" href={`/#/home`}>{t.nav.back}</a>
    </div>
    {children}
  </section>
);

/* ---------- NAV ---------- */
function Nav({lang, t, onLang}) {
  const item = (href, label) => <a href={`/#/${href}`}>{label}</a>;
  return (
    <nav className="nav">
      <div className="brand"><img src="/logo.png" alt="" /> Panela de Barro</div>
      <div className="links">
        {item("about", t.nav.about)}
        {item("menu", t.nav.menu)}
        {item("gallery", t.nav.gallery)}
        {item("woodfire", t.nav.woodfire)}
        {item("location", t.nav.location)}
        {item("support", t.nav.support)}
      </div>
      <div className="langs">
        {Object.keys(LOCALES).map(l=>(
          <button key={l} onClick={()=>onLang(l)} className={l===lang?"lang active":"lang"}>{LOCALES[l]}</button>
        ))}
      </div>
    </nav>
  );
}

/* ---------- HERO + SMOKE ---------- */
function Hero({t}) {
  // anima imagens de fundo imersivas conforme rolagem
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add("visible");
      });
    },{threshold:0.2});
    document.querySelectorAll(".immersive").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <header className="hero">
      <div className="smoke"></div>
      <img className="heroBg" src="/images/vaca-atolada.jpg" alt="" />
      <div className="heroCard">
        <h1>{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <p className="soon">{t.hero.soon}</p>
        <a className="btn" href="/#/menu">{t.hero.cta}</a>
      </div>
    </header>
  );
}

/* ---------- PAGES ---------- */

function Home({t}) {
  return (
    <>
      <Hero t={t} />
      {/* faixa imersiva */}
      {IMMERSIVE.map((src, i)=>(
        <div key={i} className="immersive" style={{backgroundImage:`url(${src})`}} />
      ))}

      <section className="container">
        <h2>{t.home.preview}</h2>
        <div className="grid">
          {MENU.map(m=>(
            <article className="card" key={m.id}>
              <img src={m.img} alt={m.name} />
              <div className="cardBody">
                <h3>{m.name}</h3>
                <p>{m.short?.pt}</p>
                <div className="tags">{m.badges?.map(b=><Badge key={b}>{b}</Badge>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function MenuPage({lang}) {
  const label = (m) => (lang==="ar" ? (m.name_ar || m.name) : (lang==="en" ? (m.name_en||m.name) : m.name));
  const desc  = (m) => m.short?.[lang] || m.short?.pt || "";
  return (
    <Section title="Menu" t={STRINGS[lang]}>
      <div className="filters">
        <a className="pill" href="#/menu">All</a>
        <a className="pill" href="#/menu?f=mains">Mains</a>
        <a className="pill" href="#/menu?f=seasonal">Seasonal</a>
        <a className="pill" href="#/menu?f=beverages">Beverages</a>
      </div>
      <div className="grid">
        {MENU.map(m=>(
          <article className="card" key={m.id}>
            <img src={m.img} alt={label(m)} />
            <div className="cardBody">
              <h3>{label(m)}</h3>
              <p>{desc(m)}</p>
              <div className="tags">{m.badges?.map(b=><Badge key={b}>{b}</Badge>)}</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Gallery({t}) {
  const pics = [
    "/images/picanha-grelhada.jpg","/images/feijoada-costela.jpg","/images/moqueca-baiana.jpg",
    "/images/pasteis-brasileiros.jpg","/images/pao-de-queijo.jpg","/images/mandioca-frita.jpg"
  ];
  return (
    <Section title={t.gallery.title} t={t}>
      <div className="masonry">
        {pics.map((src,i)=><img key={i} src={src} alt="" loading="lazy" />)}
      </div>
    </Section>
  );
}

function About({t}) {
  return (
    <Section title={t.about.title} t={t}>
      <div className="about">
        <div className="aboutText">
          <p>
            Mais do que um restaurante, o Panela de Barro é uma viagem sensorial às raízes da culinária brasileira.
            A panela de barro, usada por povos indígenas e depois aperfeiçoada nas casas brasileiras, cozinha devagar e
            deixa os ingredientes conversarem — caldos encorpados, sabores profundos, aroma de terra e lenha.
          </p>
          <p>
            Nossa história nasce no campo em Rondônia. A família plantava feijão, café, milho e mandioca — e cozinhava
            no fogão a lenha. Em Foz do Iguaçu, o restaurante familiar liderado por <strong>Cleusa</strong> e
            <strong> Alex</strong> guardou o saber da roça. Hoje, no Qatar, trazemos essa essência: moquecas, feijoadas,
            farofas, vaca atolada e pamonha — pratos que contam a história do Brasil.
          </p>
          <ul className="team">
            <li><img src="/heritage/chef-quessi.jpg" alt="" /><span>{t.about.owner}</span></li>
            <li><img src="/heritage/chef-alex.jpg" alt="" /><span>{t.about.headchef}</span></li>
            <li><img src="/heritage/panela-artesanal.jpg" alt="" /><span>{t.about.mother}</span></li>
          </ul>
        </div>
        <div className="aboutPics">
          <img src="/heritage/panela-1.jpg" alt="Panela de barro" />
          <img src="/heritage/panela-mao.jpg" alt="Artesanato da panela" />
        </div>
      </div>
    </Section>
  );
}

function Woodfire({t}) {
  return (
    <Section title={t.woodfire.title} t={t}>
      <div className="twoCols">
        <div>
          <p>
            O fogão a lenha moldou o paladar do Brasil. Do café passado ao tropeiro, das panelas de barro ao tacho de
            cobre, o fogo baixo extrai tempo e memória. A lenha dá tostado, defumado e doçura lenta — transformando
            caldos, carnes e raízes.
          </p>
          <p>
            No Panela de Barro, vamos manter essa chama viva: caldos que reduzem horas, feijoadas que descansam e
            moquecas que perfumam a sala. Com respeito à segurança local e às normas do Qatar, reproduzimos o resultado
            do fogão a lenha com controle de calor e técnica.
          </p>
        </div>
        <div className="aboutPics">
          <img src="/heritage/fogao-1.jpg" alt="Fogão a lenha" />
          <img src="/heritage/fogao-2.jpg" alt="Brasa" />
        </div>
      </div>
    </Section>
  );
}

function LocationPage({t}) {
  return (
    <Section title={t.location.title} t={t}>
      <p><strong>{t.location.area}</strong></p>
      <div className="mapWrap">
        <iframe
          title="Baraha Town"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Baraha%20Town%2C%20Doha%2C%20Qatar&output=embed">
        </iframe>
      </div>
    </Section>
  );
}

const Support = ({t}) => (
  <Section title={t.support.title} t={t}>
    <p>{t.support.text}</p>
  </Section>
);

/* ---------- ROOT ---------- */
export default function App(){
  const { lang, t, selectLang } = useLang();
  const [route, go] = useHashRoute();

  // Splash do logo
  useEffect(()=>{
    const s = document.getElementById("splash");
    if(s){ setTimeout(()=>s.classList.add("hide"), 900); }
  },[]);

  return (
    <>
      <Nav lang={lang} t={t} onLang={selectLang} />
      {route==="home" && <Home t={t} />}
      {route==="menu" && <MenuPage lang={lang} />}
      {route==="gallery" && <Gallery t={t} />}
      {route==="about" && <About t={t} />}
      {route==="woodfire" && <Woodfire t={t} />}
      {route==="location" && <LocationPage t={t} />}
      {route==="support" && <Support t={t} />}
      <footer className="footer">&copy; {new Date().getFullYear()} Panela de Barro • paneladebarroqatar.com</footer>
    </>
  );
}