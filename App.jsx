import React, { useEffect, useMemo, useState } from "react";
import { dishes as localDishes } from "./menuData";
import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";

/* ================== i18n UI ================== */
const tUI = {
  en: { about:"About", menu:"Menu", gallery:"Gallery", location:"Location", contact:"Contact", reservations:"Reservations",
        seeMenu:"See the Menu", reserve:"Reserve a Table", all:"All", mains:"Mains", sides:"Side Dishes", desserts:"Desserts", beverages:"Beverages", seasonal:"Seasonal",
        ourStory:"Our Story",
        aboutText: "A Brazilian family restaurant in Qatar. With 20 years in hospitality, we bring fire-kissed flavors from a wood-fired stove and the warmth of countryside music. Chef-owner Quessi Jhones leads the kitchen with his mother Dona Cleuza, from Minas Gerais, and his brother, the Head Chef with 10+ years of experience. Expect soulful regional classics, generous hospitality, and real Brazilian roots.",
        contactTitle:"Contact",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"Barwa Town, Doha, Qatar",
        coming:"Coming soon — opening in November.",
        close:"Close", send:"Send", name:"Name", emailLbl:"Email", phoneLbl:"Phone", party:"Guests", date:"Date", time:"Time", notes:"Notes",
        orderSoon:"Order (soon)" },
  pt: { about:"Sobre", menu:"Menu", gallery:"Galeria", location:"Localização", contact:"Contato", reservations:"Reservas",
        seeMenu:"Ver o Menu", reserve:"Reservar Mesa", all:"Todos", mains:"Pratos Principais", sides:"Acompanhamentos", desserts:"Sobremesas", beverages:"Bebidas", seasonal:"Sazonal",
        ourStory:"Nossa História",
        aboutText: "Um restaurante brasileiro de família no Catar. Há 20 anos na gastronomia, trazemos sabores beijados pelo fogo do fogão a lenha e o aconchego da música do interior. O chef-proprietário Quessi Jhones comanda a cozinha com sua mãe, Dona Cleuza, mineira, e seu irmão, Head Chef com mais de 10 anos de experiência. Clássicos regionais com alma, hospitalidade generosa e raízes brasileiras de verdade.",
        contactTitle:"Contato",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"Barwa Town, Doha, Qatar",
        coming:"Em breve — inauguração em novembro.",
        close:"Fechar", send:"Enviar", name:"Nome", emailLbl:"E-mail", phoneLbl:"Telefone", party:"Pessoas", date:"Data", time:"Horário", notes:"Observações",
        orderSoon:"Pedir (em breve)" },
  ar: { about:"حول", menu:"القائمة", gallery:"معرض", location:"الموقع", contact:"اتصال", reservations:"الحجوزات",
        seeMenu:"عرض القائمة", reserve:"احجز طاولة", all:"الكل", mains:"الأطباق الرئيسية", sides:"الأطباق الجانبية", desserts:"الحلويات", beverages:"المشروبات", seasonal:"موسمي",
        ourStory:"قصتنا",
        aboutText:"مطعم برازيلي عائلي في قطر. لدينا 20 عامًا من الخبرة ونقدم نكهات الموقد الخشبي ودفء موسيقى الريف. يقود المالك-الشيف كُوِسّي جونِس المطبخ مع والدته دونا كليوزا من ميناس جيرايس وأخيه، الشيف الرئيسي صاحب خبرة لأكثر من عشر سنوات. توقّعوا أطباقًا إقليمية أصيلة وضيافة كريمة وجذورًا برازيلية حقيقية.",
        contactTitle:"اتصال",
        email:"restaurant@paneladebarroqatar.com", phone:"+974 3047 5279", address:"باروا تاون، الدوحة، قطر",
        coming:"قريبًا — الافتتاح في نوفمبر.",
        close:"إغلاق", send:"إرسال", name:"الاسم", emailLbl:"البريد الإلكتروني", phoneLbl:"الهاتف", party:"عدد الضيوف", date:"التاريخ", time:"الوقت", notes:"ملاحظات",
        orderSoon:"طلب (قريبًا)" }
};

const categories = [
  { key:"all", label: (t)=>t.all },
  { key:"mains", label: (t)=>t.mains },
  { key:"sides", label: (t)=>t.sides },
  { key:"desserts", label: (t)=>t.desserts },
  { key:"beverages", label: (t)=>t.beverages },
  { key:"seasonal", label: (t)=>t.seasonal },
];

/* ====== CMS via Google Sheets (TSV) ======
   1) Crie uma planilha com colunas:
      id | category | image | name_pt | name_en | name_ar | short_pt | short_en | short_ar | long_pt | long_en | long_ar
   2) Arquivo > Publicar na Web > Página selecionada > Valores separados por tabulação (.tsv)
   3) Copie a URL publicada e cole abaixo em SHEET_TSV_URL
*/
const SHEET_TSV_URL = ""; // cole aqui quando tiver (opcional)

/* ================== App ================== */
export default function App(){
  const [lang,setLang] = useState("pt");
  const [route,setRoute] = useState("/");       // roteador simples
  const [filter,setFilter] = useState("all");
  const [open,setOpen] = useState(null);        // modal do prato
  const [reserve,setReserve] = useState(false); // modal reserva
  const [splashDone,setSplashDone] = useState(false);
  const [sheetDishes,setSheetDishes] = useState(null);

  // carrega da planilha (TSV) se houver URL
  useEffect(()=>{
    if(!SHEET_TSV_URL) return;
    (async()=>{
      try{
        const r = await fetch(SHEET_TSV_URL);
        const text = await r.text();
        const rows = text.trim().split(/\r?\n/).map(line=>line.split("\t"));
        const header = rows.shift();
        const idx = (name)=> header.indexOf(name);
        const ds = rows.map(c=>({
          id: c[idx('id')],
          category: c[idx('category')],
          image: c[idx('image')],
          name: { pt:c[idx('name_pt')], en:c[idx('name_en')], ar:c[idx('name_ar')] },
          short:{ pt:c[idx('short_pt')], en:c[idx('short_en')], ar:c[idx('short_ar')] },
          long: { pt:c[idx('long_pt')],  en:c[idx('long_en')],  ar:c[idx('long_ar')]  },
        })).filter(d=>d.id && d.category);
        if(ds.length) setSheetDishes(ds);
      }catch(e){ console.warn("Sheet load failed, using local data.", e); }
    })();
  },[]);

  const dishes = sheetDishes?.length ? sheetDishes : localDishes;
  const t = tUI[lang];

  const list = useMemo(()=>{
    let L = dishes.map(d=>({
      ...d,
      title: d.name[lang] || d.name.en,
      shortTxt: d.short[lang] || d.short.en,
      longTxt:  (d.long && (d.long[lang] || d.long.en)) || (d.short[lang] || d.short.en),
    }));
    return filter==="all" ? L : L.filter(d=>d.category===filter);
  },[dishes,lang,filter]);

  // ====== Carrossel ======
  const slides = useMemo(()=>[
    "/images/Verão-Brasil.jpg",
    "/images/picanha.jpg",
    "/images/Mandioca-frita.jpg",
    "/images/Encanto-de-Coco.jpg",
    "/images/Moqueca-baiana.jpg",
  ],[]);
  const [slide,setSlide] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=> setSlide(s=> (s+1)%slides.length ), 4500);
    return ()=>clearInterval(id);
  },[slides.length]);

  return (
    <>
      {/* ====== Splash ====== */}
      <AnimatePresence>
        {!splashDone && (
          <motion.div className="splash"
            initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}
            transition={{delay:1.8, duration:.6}}
            onAnimationComplete={()=>setSplashDone(true)}
          >
            <motion.img src="/logo.png" alt="logo" className="logo"
              initial={{scale:.9, opacity:0}}
              animate={{scale:1.08, opacity:1}}
              transition={{duration:.7, ease:"easeOut"}}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====== NAV ====== */}
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

      {/* ====== ROUTES ====== */}
      {route==="/" ? (
        <Home
          t={t}
          slides={slides}
          slide={slide}
          setRoute={setRoute}
          onReserve={()=>setReserve(true)}
        />
      ) : (
        <MenuPage t={t} lang={lang} filter={filter} setFilter={setFilter} list={list} open={open} setOpen={setOpen}/>
      )}

      {/* ====== RESERVATION MODAL ====== */}
      <AnimatePresence>
      {reserve && (
        <motion.div className="modal reserve-modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <motion.div className="box" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:30, opacity:0}}>
            <div className="body">
              <h3>{t.reservations}</h3>
              <ReservationForm t={t} onClose={()=>setReserve(false)}/>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* ====== FOOTER ====== */}
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

/* ---------- Home (carrossel + seções) ---------- */
function Home({t, slides, slide, setRoute, onReserve}){
  return (
    <>
      {/* HERO com carrossel */}
      <section className="hero" id="hero" aria-label="featured">
        <div className="carousel" aria-hidden>
          <AnimatePresence mode="popLayout">
            <motion.div key={slide}
              className="slide"
              style={{ backgroundImage:`url(${slides[slide]})` }}
              initial={{opacity:0, scale:1.05}}
              animate={{opacity:1, scale:1}}
              exit={{opacity:0}}
              transition={{duration:.9}}
            />
          </AnimatePresence>
        </div>

        <div className="paper">
          <h1>Panela de Barro</h1>
          <p>Brazilian Heritage Cuisine in Qatar</p>
          <div className="cta">
            <button className="btn primary" onClick={()=>setRoute("/menu")}>{t.seeMenu}</button>
            <button className="btn" onClick={onReserve}>{t.reserve}</button>
          </div>
        </div>

        <div className="dots">
          {slides.map((_,i)=>(
            <div key={i} className={`dot ${i===slide?'active':''}`} />
          ))}
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

      {/* LOCATION + MAP */}
      <div className="container" id="location">
        <h2 className="section-title">Doha, Qatar</h2>
        <p>Barwa Town — easy access & parking.</p>
        <div className="map-wrap" style={{marginTop:12}}>
          <iframe
            title="Barwa Town Doha"
            width="100%" height="360" style={{border:0}}
            loading="lazy" allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Barwa%20Town%20Doha%20Qatar&output=embed">
          </iframe>
        </div>
      </div>

      {/* CONTACT */}
      <div className="container" id="contact">
        <h2 className="section-title">{t.contactTitle}</h2>
        <p>📧 {t.email}</p>
        <p>📞 {t.phone}</p>
        <p>📍 {t.address}</p>
      </div>
    </>
  );
}

/* ---------- Menu Page ---------- */
function MenuPage({t, lang, filter, setFilter, list, open, setOpen}){
  return (
    <div className="container" id="menu" style={{paddingTop:24}}>
      <h2 className="section-title">Menu</h2>

      <div className="menu-toolbar">
        {categories.map(c=>(
          <button key={c.key}
            className={`pill ${filter===c.key?"active":""}`}
            onClick={()=>setFilter(c.key)}>
            {c.label(t)}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map(item=>(
          <article key={item.id} className="card" onClick={()=>setOpen(item)} style={{cursor:"pointer"}}>
            <img src={`/images/${encodeURIComponent(item.image)}`} alt={item.title} loading="lazy"/>
            <div className="pad">
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <h4>{item.title}</h4>
                <span className="badge">{labelCat(item.category,t)}</span>
              </div>
              <div style={{color:"#555", fontSize:14}}>{item.shortTxt}</div>
            </div>
          </article>
        ))}
      </div>

      {/* modal/lightbox */}
      <AnimatePresence>
      {open && (
        <motion.div className="modal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(null)}>
          <motion.div className="box" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:30, opacity:0}} onClick={(e)=>e.stopPropagation()}>
            <img src={`/images/${encodeURIComponent(open.image)}`} alt={open.title}/>
            <div className="body">
              <h3>{open.name[lang] || open.name.en}</h3>
              <p style={{color:"#555"}}>{open.longTxt}</p>
              <div style={{display:"flex",gap:10, marginTop:12}}>
                <button className="btn" onClick={()=>setOpen(null)}>{t.close}</button>
                <button className="btn primary">{t.orderSoon}</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
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

/* ---------- Reservation Form ---------- */
function ReservationForm({t, onClose}){
  // Formspree (gratuito): crie um form e substitua o ID abaixo.
  const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx"; // troque por seu ID; se deixar vazio, cai no fallback mailto

  const [state,setState] = useState({
    name:"", email:"", phone:"", party:"2", date:"", time:"19:00", notes:""
  });

  const change = (e)=> setState(s=>({...s,[e.target.name]:e.target.value}));

  const submit = async (e)=>{
    e.preventDefault();
    if(FORM_ENDPOINT.includes("xxxx")){
      // fallback: mailto
      const body = encodeURIComponent(
        `Reservation request\nName: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\nGuests: ${state.party}\nDate: ${state.date}\nTime: ${state.time}\nNotes: ${state.notes}`
      );
      window.location.href = `mailto:restaurant@paneladebarroqatar.com?subject=Reservation&body=${body}`;
      onClose();
      return;
    }
    const fd = new FormData();
    Object.entries(state).forEach(([k,v])=>fd.append(k,v));
    const r = await fetch(FORM_ENDPOINT,{ method:"POST", body:fd, headers:{ Accept:"application/json" } });
    if(r.ok){ alert("Pedido enviado! Entraremos em contato para confirmar."); onClose(); }
    else{ alert("Não foi possível enviar agora. Tente novamente ou use o WhatsApp."); }
  };

  return (
    <form className="form" onSubmit={submit}>
      <input name="name" placeholder={t.name} value={state.name} onChange={change} required/>
      <input name="email" type="email" placeholder={t.emailLbl} value={state.email} onChange={change} required/>
      <input name="phone" placeholder={t.phoneLbl} value={state.phone} onChange={change} />
      <select name="party" value={state.party} onChange={change}>
        {[1,2,3,4,5,6,7,8,9,10].map(n=><option key={n} value={n}>{t.party}: {n}</option>)}
      </select>
      <input name="date" type="date" value={state.date} onChange={change} required/>
      <input name="time" type="time" value={state.time} onChange={change} required/>
      <textarea name="notes" placeholder={t.notes} value={state.notes} onChange={change}/>
      <div className="actions">
        <button type="button" className="btn" onClick={onClose}>{t.close}</button>
        <button className="btn primary" type="submit">{t.send}</button>
      </div>
    </form>
  );
}