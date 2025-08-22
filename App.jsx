import React, { useMemo, useState } from "react";
import { dishes } from "./menuData";
import "./styles.css";

/* ---------------------- i18n ---------------------- */
const tUI = {
  en: { about:"About", menu:"Menu", gallery:"Gallery", location:"Location", contact:"Contact", reservations:"Reservations",
        seeMenu:"See the Menu", reserve:"Reserve a Table", all:"All", mains:"Mains", sides:"Side Dishes", desserts:"Desserts", beverages:"Beverages", seasonal:"Seasonal",
        ourStory:"Our Story",
        aboutText: "A Brazilian family restaurant in Qatar. With 20 years in hospitality, we bring fire‑kissed flavors from a wood‑fired stove and the warmth of countryside music. Chef‑owner Quessi Jhones leads the kitchen with his mother Dona Cleuza, from Minas Gerais, and his brother, the Head Chef with 10+ years of experience. Expect soulful regional classics, generous hospitality, and real Brazilian roots.",
        contactTitle:"Contact",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"Barwa Town, Doha, Qatar",
        coming:"Coming soon — opening in November." },
  pt: { about:"Sobre", menu:"Menu", gallery:"Galeria", location:"Localização", contact:"Contato", reservations:"Reservas",
        seeMenu:"Ver o Menu", reserve:"Reservar Mesa", all:"Todos", mains:"Pratos Principais", sides:"Acompanhamentos", desserts:"Sobremesas", beverages:"Bebidas", seasonal:"Sazonal",
        ourStory:"Nossa História",
        aboutText: "Um restaurante brasileiro de família no Catar. Há 20 anos na gastronomia, trazemos sabores beijados pelo fogo do fogão a lenha e o aconchego da música do interior. O chef‑proprietário Quessi Jhones comanda a cozinha com sua mãe, Dona Cleuza, mineira, e seu irmão, Head Chef com mais de 10 anos de experiência. Clássicos regionais com alma, hospitalidade generosa e raízes brasileiras de verdade.",
        contactTitle:"Contato",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"Barwa Town, Doha, Qatar",
        coming:"Em breve — inauguração em novembro." },
  ar: { about:"حول", menu:"القائمة", gallery:"معرض", location:"الموقع", contact:"اتصال", reservations:"الحجوزات",
        seeMenu:"عرض القائمة", reserve:"احجز طاولة", all:"الكل", mains:"الأطباق الرئيسية", sides:"الأطباق الجانبية", desserts:"الحلويات", beverages:"المشروبات", seasonal:"موسمي",
        ourStory:"قصتنا",
        aboutText:"مطعم برازيلي عائلي في قطر. لدينا 20 عامًا من الخبرة ونقدم نكهات الموقد الخشبي ودفء موسيقى الريف. يقود المالك‑الشيف كُوِسّي جونِس المطبخ مع والدته دونا كليوزا من ميناس جيرايس وأخيه، الشيف الرئيسي صاحب خبرة لأكثر من عشر سنوات. توقّعوا أطباقًا إقليمية أصيلة وضيافة كريمة وجذورًا برازيلية حقيقية.",
        contactTitle:"اتصال",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"باروا تاون، الدوحة، قطر",
        coming:"قريبًا — الافتتاح في نوفمبر." }
};

/* ------------------- Helpers ------------------- */
const categories = [
  { key:"all", label: (t)=>t.all },
  { key:"mains", label: (t)=>t.mains },
  { key:"sides", label: (t)=>t.sides },
  { key:"desserts", label: (t)=>t.desserts },
  { key:"beverages", label: (t)=>t.beverages },
  { key:"seasonal", label: (t)=>t.seasonal },
];

/* -------------- App -------------- */
export default function App(){
  const [lang,setLang] = useState("pt"); // PT como padrão
  const [route,setRoute] = useState("/"); // roteador simples
  const [filter,setFilter] = useState("all");
  const [open,setOpen] = useState(null);

  const t = tUI[lang];

  const list = useMemo(()=>{
    let L = dishes.map(d=>({
      ...d,
      title: d.name[lang] || d.name.en,
      short: d.short[lang] || d.short.en,
    }));
    return filter==="all" ? L : L.filter(d=>d.category===filter);
  },[lang,filter]);

  return (
    <>
      {/* NAV */}
      <div className="nav">
        <div className="nav-inner">
          <div className="brand" onClick={()=>setRoute("/")} style={{cursor:"pointer"}}>
            <img src="/logo.png" alt="logo"/>
            <span>Panela de Barro</span>
          </div>

          <div style={{display:"flex",gap:6,alignItems:"center"}}>
            <a onClick={()=>setRoute("/")} href="#about">{t.about}</a>
            <a onClick={()=>setRoute("/menu")} href="#menu">{t.menu}</a>
            <a onClick={()=>setRoute("/")} href="#gallery">{t.gallery}</a>
            <a onClick={()=>setRoute("/")} href="#location">{t.location}</a>
            <a onClick={()=>setRoute("/")} href="#contact">{t.contact}</a>
            <a onClick={()=>setRoute("/")} href="#reservations">{t.reservations}</a>
          </div>

          <div className="langs">
            {["pt","en","ar"].map(code=>(
              <button key={code} className={lang===code?"active":""} onClick={()=>setLang(code)}>
                {code==="pt"?"BR PT":code==="en"?"GB EN":"QA AR"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ROUTES */}
      {route==="/" ? (
        <Home t={t} setRoute={setRoute}/>
      ) : (
        <MenuPage t={t} lang={lang} filter={filter} setFilter={setFilter} list={list} open={open} setOpen={setOpen}/>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div>© 2025 Panela de Barro</div>
          <div style={{display:"flex",gap:12}}>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}

/* -------------- Home -------------- */
function Home({t, setRoute}){
  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="paper">
          <h1>Panela de Barro</h1>
          <p>Brazilian Heritage Cuisine in Qatar</p>
          <div className="cta">
            <button className="btn primary" onClick={()=>setRoute("/menu")}>{t.seeMenu}</button>
            <button className="btn">{t.reserve}</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="container about" id="about">
        <h2 className="section-title">{t.ourStory}</h2>
        <p>{t.aboutText}</p>
        <p><strong>{t.coming}</strong></p>
      </div>

      {/* GALLERY STRIP */}
      <div className="container" id="gallery">
        <div className="gallery-strip">
          <img src="/images/Verão-Brasil.jpg" alt="1"/>
          <img src="/images/picanha.jpg" alt="2"/>
          <img src="/images/Mandioca-frita.jpg" alt="3"/>
          <img src="/images/Encanto-de-Coco.jpg" alt="4"/>
          <img src="/images/Moqueca-baiana.jpg" alt="5"/>
        </div>
      </div>

      {/* LOCATION + CONTACT */}
      <div className="container" id="location">
        <h3 style={{marginBottom:6}}>Doha, Qatar</h3>
        <p>Barwa Town — easy access & parking.</p>
      </div>

      <div className="container" id="contact">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p>📧 {t.email}</p>
        <p>📞 {t.phone}</p>
        <p>📍 {t.address}</p>
      </div>
    </>
  );
}

/* -------------- Menu Page -------------- */
function MenuPage({t, lang, filter, setFilter, list, open, setOpen}){
  return (
    <div className="container" id="menu" style={{paddingTop:24}}>
      <h2 className="section-title">Menu</h2>

      {/* filtros */}
      <div className="menu-toolbar">
        {categories.map(c=>(
          <button key={c.key}
            className={`pill ${filter===c.key?"active":""}`}
            onClick={()=>setFilter(c.key)}>
            {c.label(t)}
          </button>
        ))}
      </div>

      {/* grade */}
      <div className="grid">
        {list.map(item=>(
          <article key={item.id} className="card" onClick={()=>setOpen(item)} style={{cursor:"pointer"}}>
            <img
              src={`/images/${encodeURIComponent(item.image)}`}  /* permite acentos e & */
              alt={item.title}
              loading="lazy"
            />
            <div className="pad">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h4>{item.title}</h4>
                <span className="badge">{labelCat(item.category,t)}</span>
              </div>
              <div style={{color:"#555", fontSize:14}}>{item.short}</div>
            </div>
          </article>
        ))}
      </div>

      {/* modal */}
      {open && (
        <div className="modal" onClick={()=>setOpen(null)}>
          <div className="box" onClick={(e)=>e.stopPropagation()}>
            <img src={`/images/${encodeURIComponent(open.image)}`} alt={open.name[lang] || open.name.en}/>
            <div className="body">
              <h3>{open.name[lang] || open.name.en}</h3>
              <p style={{color:"#555"}}>{open.long?.[lang] || open.long?.en || open.short?.[lang] || open.short?.en}</p>
              <div style={{display:"flex",gap:10, marginTop:12}}>
                <button className="btn" onClick={()=>setOpen(null)}>Close</button>
                <button className="btn primary">Order (soon)</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function labelCat(c,t){
  switch(c){
    case 'mains': return t.mains;
    case 'sides': return t.sides;
    case 'desserts': return t.desserts;
    case 'beverages': return t.beverages;
    case 'seasonal': return t.seasonal;
    default: return t.all;
  }
}


