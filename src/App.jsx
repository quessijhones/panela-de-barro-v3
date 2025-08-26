import React, { useEffect, useMemo, useState } from "react";
import { LOCALES, getLang, setLang, t } from "./i18n";
import MENU from "./menuData";
import "./styles.css";

/* ===== imagens imersivas (já na pasta public/immersive) ===== */
const IMMS = ["amazonia","cerrado","lencois","litoral","serra"].map(n=>`/immersive/${n}.jpg`);

function useHashRoute() {
  const read = () => (window.location.hash.replace("#/", "") || "home");
  const [route, setRoute] = useState(read());
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return [route, (r)=>{ window.location.hash = `/${r}`; }];
}

function LanguagePills({ lang, onChange }) {
  return (
    <div className="lang">
      {LOCALES.map(l => (
        <button
          key={l}
          className={`pill ${lang===l ? "active":""}`}
          onClick={()=>onChange(l)}
          aria-pressed={lang===l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Nav({ lang }) {
  return (
    <nav className="nav">
      <div className="brand" onClick={()=>{window.location.hash="/home";}}>
        <img src="/logo.png" alt="" />
        <span>Panela de Barro</span>
      </div>
      <div className="links">
        <a href={`/#/about?lang=${lang}`}>{t("nav.about", lang)}</a>
        <a href={`/#/menu?lang=${lang}`}>{t("nav.menu", lang)}</a>
        <a href={`/#/gallery?lang=${lang}`}>{t("nav.gallery", lang)}</a>
        <a href={`/#/woodfire?lang=${lang}`}>{t("nav.woodfire", lang)}</a>
        <a href={`/#/location?lang=${lang}`}>{t("nav.location", lang)}</a>
        <a href={`/#/support?lang=${lang}`}>{t("nav.support", lang)}</a>
      </div>
    </nav>
  );
}

/* ====== Cards de Menu ====== */
function Badge({ children }) { return <span className="badge">{children}</span>; }

function MenuCard({ item, lang }) {
  const tags = {
    halal: t("menu.tags.halal", lang),
    beef: t("menu.tags.beef", lang),
    sea: t("menu.tags.sea", lang),
    gluten: t("menu.tags.gluten", lang),
    dairy: t("menu.tags.dairy", lang),
    veg: t("menu.tags.veg", lang)
  };
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="card" onClick={()=>setOpen(true)} role="button" tabIndex={0}>
        <img src={item.img} alt="" />
        <div className="card-body">
          <h4>{item.name[lang] ?? item.name.pt}</h4>
          <p>{item.short[lang] ?? item.short.pt}</p>
          <div className="chips">
            {item.tags.map(tag => <Badge key={tag}>{tags[tag]}</Badge>)}
          </div>
        </div>
      </div>

      {open && (
        <div className="modal" onClick={()=>setOpen(false)}>
          <div className="modal-card" onClick={(e)=>e.stopPropagation()}>
            <img src={item.img} alt="" />
            <div className="modal-body">
              <h3>{item.name[lang] ?? item.name.pt}</h3>
              <p className="muted">{item.short[lang] ?? item.short.pt}</p>
              <p>{item.full[lang] ?? item.full.pt}</p>
              <div className="chips">
                {item.tags.map(tag => <Badge key={tag}>{tags[tag]}</Badge>)}
              </div>
              <div className="nutrition">
                <span>{item.nutrition.kcal} {t("menu.nutrition.kcal", lang)}</span>
                <span>{item.nutrition.carbs} {t("menu.nutrition.carbs", lang)}</span>
                <span>{item.nutrition.protein} {t("menu.nutrition.protein", lang)}</span>
              </div>
              <button className="btn" onClick={()=>setOpen(false)}>
                {t("menu.details.close", lang)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ====== PÁGINAS ====== */

function Hero({ lang }) {
  return (
    <section className="hero">
      <img src="/images/vaca-atolada.jpg" alt="" />
      <div className="hero-txt">
        <h1>{t("home.h1", lang)}</h1>
        <p>{t("home.sub", lang)}</p>
        <p className="soon">{t("home.soon", lang)}</p>
        <a
          className="btn"
          href={`/#/menu?lang=${lang}`}
          target="_blank"
          rel="noopener"
        >
          {t("home.viewMenu", lang)}
        </a>
      </div>
    </section>
  );
}

function HomePreview({ lang }) {
  const sample = MENU.slice(0, 6);
  return (
    <section className="container">
      <h2>{t("home.preview", lang)}</h2>
      <div className="grid">
        {sample.map(it => <MenuCard key={it.id} item={it} lang={lang} />)}
      </div>
    </section>
  );
}

function ImmersiveStrip() {
  // entra com fade + parallax
  useEffect(() => {
    const els = document.querySelectorAll(".immersive");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (e.isIntersecting) e.target.classList.add("show");
      });
    }, { threshold: 0.25 });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, []);
  return (
    <>
      {IMMS.map((src, i)=>(
        <div className="immersive" key={i} style={{backgroundImage:`url(${src})`}}>
          <div className="veil"></div>
        </div>
      ))}
    </>
  );
}

function MenuPage({ lang }) {
  const [filter, setFilter] = useState("all");
  const tabs = [
    ["all", t("menu.filters.all",lang)],
    ["mains", t("menu.filters.mains",lang)],
    ["sides", t("menu.filters.sides",lang)],
    ["beverages", t("menu.filters.beverages",lang)],
    ["seasonal", t("menu.filters.seasonal",lang)],
    ["chef", t("menu.filters.chef",lang)]
  ];
  const list = useMemo(()=> filter==="all" ? MENU : MENU.filter(m=>m.cat===filter), [filter]);

  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <div className="tabs">
        {tabs.map(([val,label])=>(
          <button key={val} className={`pill ${filter===val?"active":""}`} onClick={()=>setFilter(val)}>{label}</button>
        ))}
      </div>
      <div className="grid">
        {list.map(it => <MenuCard key={it.id} item={it} lang={lang} />)}
      </div>
    </section>
  );
}

function GalleryPage({ lang }) {
  // usa as imagens do próprio MENU como galeria
  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <h2>{t("gallery.title", lang)}</h2>
      <div className="masonry">
        {MENU.map(m=>(
          <figure key={m.id}>
            <img src={m.img} alt="" />
            <figcaption>{m.name[lang] ?? m.name.pt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function AboutPage({ lang }) {
  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <h2>{t("about.title", lang)}</h2>

      <div className="split">
        <div>
          <p>
            {t("about.backToRoots", lang)} {lang==="pt" && (
              <> Um lugar onde cada garfada é homenagem às tradições transmitidas no
              calor do fogão a lenha e no aconchego da cerâmica.</>
            )}
            {lang==="en" && (<> A place where every bite honors traditions forged over wood-fire and clay.</>)}
            {lang==="ar" && (<> مكان يحتفي بكل لقمة بتقاليد الطهي على الحطب والفخار.</>)}
          </p>

          <h3>{t("about.whyClay",lang)}</h3>
          <p>
            {lang==="pt" ? (
              <>A panela de barro atravessa nossa história: dos povos indígenas que moldavam o barro,
              às cozinhas afro-brasileiras onde a criatividade transformou feijão em feijoada e peixe em moqueca.
              O barro não apressa: ele dá tempo para que os sabores se encontrem e o caldo ganhe corpo.</>
            ) : lang==="en" ? (
              <>Clay pots run through Brazil’s story — from Indigenous craft to Afro-Brazilian kitchens where creativity
              turned beans into feijoada and fish into moqueca. Clay doesn’t rush; it lets flavors marry and broths thicken.</>
            ) : (
              <>يمتد قدر الفخار عبر تاريخ البرازيل: من حرف السكان الأصليين إلى مطابخ الأفرو-برازيليين
              حيث تحوّلت الفاصوليا إلى فيجوادا والسمك إلى موكيكا. الفخار لا يستعجل الطعام؛
              يسمح للنكهات بالالتئام وللمرق بالامتلاء.</>
            )}
          </p>
        </div>
        <div className="stack">
          <img src="/heritage/panela-artesanal.jpg" alt="" />
          <img src="/heritage/panela-mao.jpg" alt="" />
        </div>
      </div>

      <h3>{t("about.woodfire",lang)}</h3>
      <div className="split">
        <div>
          <p>
            {lang==="pt" ? (
              <>O fogão a lenha é memória viva do interior: chama mansa, fumaça aromática e panela de ferro.
              No <strong>Panela de Barro</strong>, ele inspira nossos assados e caldos, mantendo o espírito da roça com técnica contemporânea.</>
            ) : lang==="en" ? (
              <>Wood-fire is living memory: gentle flame, aromatic smoke and cast-iron pots. At <strong>Panela de Barro</strong>,
              it guides our roasts and broths — countryside soul with modern craft.</>
            ) : (
              <>الطبخ على الحطب هو ذاكرة ريفية حيّة: لهب هادئ ودخان عطِر وقدور من حديد. في <strong>قدر الفخار</strong>،
              يلهم مشاوينا ومرقنا بمزج روح الريف مع تقنية معاصرة.</>
            )}
          </p>
        </div>
        <div className="stack">
          <img src="/heritage/fogao-1.jpg" alt="" />
          <img src="/heritage/fogao-2.jpg" alt="" />
          <img src="/heritage/fogao-3.jpg" alt="" />
        </div>
      </div>

      <h3>{t("about.team",lang)}</h3>
      <div className="team">
        <article>
          <img src="/heritage/chef-quessi.jpg" alt="Chef Quessi" onError={(e)=>e.currentTarget.src="/logo.png"} />
          <h4>Quessi — Proprietário</h4>
          <p>
            {lang==="pt" ? (
              <>10+ anos de cozinha, 6 focados em culinária brasileira entre Abu Dhabi e Qatar. Cresceu em Rondônia, na fazenda,
              plantando feijão, café, milho e mandioca. Aprendeu com a mãe Dona Cleusa e com o irmão Alex a essência do ingrediente e o fogão a lenha.</>
            ) : lang==="en" ? (
              <>10+ years cooking, 6 dedicated to Brazilian cuisine in Abu Dhabi and Qatar. Raised on a farm in Rondônia,
              learning from his mother Dona Cleusa and his brother Alex — ingredients first and wood-fire technique.</>
            ) : (
              <>أكثر من 10 سنوات في الطهي، 6 سنوات في المطبخ البرازيلي بين أبوظبي وقطر. نشأ في روندونيا على مزرعة،
              وتعلّم من والدته دونا كليوزا وأخيه أليكس جوهر المكوّنات والطبخ على الحطب.</>
            )}
          </p>
        </article>
        <article>
          <img src="/heritage/chef-alex.jpg" alt="Chef Alex" onError={(e)=>e.currentTarget.src="/logo.png"} />
          <h4>Alex — Head Chef</h4>
          <p>
            {lang==="pt" ? (
              <>Mais de 10 anos entre culinária brasileira e italiana. Técnica precisa, memória afetiva caipira.</>
            ) : lang==="en" ? (
              <>10+ years across Brazilian and Italian kitchens. Technical precision with rustic soul.</>
            ) : (
              <>أكثر من 10 سنوات بين المطبخين البرازيلي والإيطالي — دقة تقنية وروح ريفية.</>
            )}
          </p>
        </article>
        <article>
          <img src="/heritage/panela-mao.jpg" alt="Dona Cleusa" />
          <h4>Dona Cleusa — Matriarca</h4>
          <p>
            {lang==="pt" ? (
              <>25+ anos de cozinha (na verdade desde os 12 no fogão a lenha com a avó). Mineira com raízes italianas —
              farinhas, caldos e afeto.</>
            ) : lang==="en" ? (
              <>25+ years cooking (since age 12 on wood-fire with her mother). Minas Gerais heritage with Italian roots —
              flours, broths and warmth.</>
            ) : (
              <>أكثر من 25 عاماً في المطبخ (منذ سن 12 على الحطب مع والدتها). أصول من ميناس جيرايس مع جذور إيطالية —
              دقيق ومرق ودفء.</>
            )}
          </p>
        </article>
      </div>
    </section>
  );
}

function WoodfirePage({ lang }) {
  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <h2>{t("about.woodfire",lang)}</h2>
      <p>
        {lang==="pt" ? (
          <>Do tacho de cobre aos grandes fornos de barro, a história do fogão a lenha no Brasil mistura indígenas,
          tropeiros e imigrações. Chama calma, fumaça perfumada e tempo: três ingredientes que transformam comida simples em memória.</>
        ) : lang==="en" ? (
          <>From copper kettles to clay ovens, Brazil’s wood-fire story blends Indigenous craft, muleteers and migrations.
          Gentle flame, scented smoke and time turn simple food into memory.</>
        ) : (
          <>من قدور النحاس إلى أفران الطين، تمتزج قصة الطهي بالحطب في البرازيل بحِرَف السكان الأصليين والقوافل والهجرات.
          لهب هادئ ودخان معطّر والزمن يحوّلون الطعام البسيط إلى ذكرى.</>
        )}
      </p>
      <div className="stack">
        <img src="/heritage/fogao-1.jpg" alt="" />
        <img src="/heritage/fogao-2.jpg" alt="" />
      </div>
    </section>
  );
}

function LocationPage({ lang }) {
  const embed = "https://www.google.com/maps?q=Baraha%20Town%20Doha%20Qatar&output=embed";
  const open = "https://www.google.com/maps/search/?api=1&query=Baraha%20Town%20Doha%20Qatar";
  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <h2>{t("location.title", lang)}</h2>
      <p className="muted">{t("location.address", lang)}</p>
      <div className="mapwrap">
        <iframe
          title="Baraha Town"
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
      <a className="btn ghost" href={open} target="_blank" rel="noopener">
        {t("location.openMaps", lang)}
      </a>
    </section>
  );
}

function SupportPage({ lang }) {
  return (
    <section className="container">
      <a className="back" href={`/?lang=${lang}`}>{t("nav.back",lang)}</a>
      <h2>{t("support.title", lang)}</h2>
      <p>{t("support.body", lang)}</p>
      <ul className="bullets">
        <li><a href="https://g.page/r" target="_blank" rel="noopener">Google Reviews</a></li>
        <li><a href="https://wa.me/" target="_blank" rel="noopener">WhatsApp</a></li>
      </ul>
    </section>
  );
}

/* ====== APP ====== */
export default function App() {
  const [route] = useHashRoute();
  const [lang, setLangState] = useState(getLang());

  useEffect(() => {
    const on = (e) => setLangState(e.detail || getLang());
    window.addEventListener("langchange", on);
    return () => window.removeEventListener("langchange", on);
  }, []);

  useEffect(() => {
    // splash some 1.2s
    const s = document.getElementById("splash");
    s?.classList.add("hide");
  }, []);

  const changeLang = (l) => setLang(l); // atualiza URL + dispara evento

  return (
    <>
      <Nav lang={lang} />
      <LanguagePills lang={lang} onChange={changeLang} />

      {route === "home" && <>
        <Hero lang={lang} />
        <ImmersiveStrip />
        <HomePreview lang={lang} />
      </>}

      {route === "menu" && <MenuPage lang={lang} />}
      {route === "gallery" && <GalleryPage lang={lang} />}
      {route === "about" && <AboutPage lang={lang} />}
      {route === "woodfire" && <WoodfirePage lang={lang} />}
      {route === "location" && <LocationPage lang={lang} />}
      {route === "support" && <SupportPage lang={lang} />}
    </>
  );
}