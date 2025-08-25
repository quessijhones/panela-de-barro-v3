import React, { useEffect, useMemo, useState } from "react";
import { getLang, setLang, t, trDish } from "./i18n";
import { MENU, CATS } from "./menuData";

const useHashRoute = () => {
  const [route, setRoute] = useState(() => (location.hash || "#/home"));
  useEffect(() => {
    const onHash = () => setRoute(location.hash || "#/home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route.replace("#", "");
};

const Brand = () => (
  <div className="brand">
    <img src="/logo.png" alt="logo" />
    <span>Panela de Barro</span>
  </div>
);

const LangSwitch = () => {
  const current = getLang();
  return (
    <div className="langs">
      {["pt", "en", "ar"].map((l) => (
        <button
          key={l}
          className={current === l ? "chip active" : "chip"}
          onClick={() => setLang(l)}
          aria-label={l.toUpperCase()}
        >
          {t(`lang_${l}`)}
        </button>
      ))}
    </div>
  );
};

const Nav = () => (
  <nav className="topnav">
    <Brand />
    <ul>
      <li><a href="#/about">{t("nav_about")}</a></li>
      <li><a href="#/menu">{t("nav_menu")}</a></li>
      <li><a href="#/gallery">{t("nav_gallery")}</a></li>
      <li><a href="#/location">{t("nav_location")}</a></li>
      <li><a href="#/contact">{t("nav_contact")}</a></li>
    </ul>
    <LangSwitch />
  </nav>
);

// ====== HERO + smoke ======
const Hero = () => (
  <section className="hero">
    <div className="smoke" aria-hidden="true"></div>
    <div className="hero-inner">
      <h1 className="title">{t("hero_title")}</h1>
      <p className="sub">{t("hero_sub")}</p>
      <p className="soon">{t("coming_soon")}</p>
      <a
        className="btn"
        href="#/menu"
        target="_blank"
        rel="noreferrer"
      >
        {t("hero_cta")}
      </a>
    </div>
  </section>
);

// ====== HOME preview ======
const HomePreview = () => {
  // 6 primeiros itens para preview
  const preview = useMemo(() => MENU.slice(0, 6), []);
  return (
    <section className="wrap">
      <h2>{t("menu_preview")}</h2>
      <div className="grid">
        {preview.map((d) => (
          <DishCard key={d.id} dish={d} />
        ))}
      </div>

      {/* Seções imersivas de fundo */}
      <ImmersiveStrip />
    </section>
  );
};

const ImmersiveStrip = () => {
  const imgs = [
    "/immersive/amazonia.jpg",
    "/immersive/cerrado.jpg",
    "/immersive/lencois.jpg",
    "/immersive/litoral.jpg",
    "/immersive/serra.jpg",
  ];
  // IntersectionObserver para efeito de parallax simples
  useEffect(() => {
    const sections = document.querySelectorAll(".immersive");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="immersive-stack">
      {imgs.map((src, i) => (
        <section
          key={src}
          className="immersive"
          style={{ "--bg": `url(${src})` }}
        >
          <div className="immersive-text">
            <h3>Brasil • {i + 1}</h3>
            <p>
              {i === 0
                ? "Amazônia – frutas, castanhas e rios que inspiram nossos sucos."
                : i === 1
                ? "Cerrado – doçura do caju e do pequi, energia do interior."
                : i === 2
                ? "Lençóis – brancos e azuis, lembrando o sal e o vento do Nordeste."
                : i === 3
                ? "Litoral – perfumes da moqueca e do coentro fresco."
                : "Serra – friozinho que pede caldo e panela de barro."}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

// ====== MENU PAGE ======
const Filters = ({ value, onChange }) => {
  const chips = [
    ["all", t("all")],
    [CATS.MAINS, t("mains")],
    [CATS.SIDES, t("sides")],
    [CATS.DESSERTS, t("desserts")],
    [CATS.BEV, t("beverages")],
    [CATS.SEASONAL, t("seasonal")],
    [CATS.CHEF, t("chefs")],
  ];
  return (
    <div className="filters">
      {chips.map(([k, label]) => (
        <button
          key={k}
          className={value === k ? "chip active" : "chip"}
          onClick={() => onChange(k)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const DishCard = ({ dish, onClick }) => (
  <article className="card" onClick={() => onClick?.(dish)}>
    <div className="thumb" style={{ backgroundImage: `url(${dish.image})` }} />
    <div className="body">
      <h3>{trDish(dish, "name")}</h3>
      {dish.badge?.includes("mains") && <span className="chip">{t("mains")}</span>}
      <p className="muted">{trDish(dish, "short")}</p>
      <div className="tags">
        {dish.badge?.map((b) => (
          <span key={b} className="pill">{t(b)}</span>
        ))}
      </div>
    </div>
  </article>
);

const DishModal = ({ dish, onClose }) =>
  !dish ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img src={dish.image} alt={trDish(dish, "name")} />
        <div className="modal-body">
          <h3>{trDish(dish, "name")}</h3>
          <div className="tags">
            {dish.badge?.map((b) => (
              <span key={b} className="pill">{t(b)}</span>
            ))}
          </div>
          <p>{trDish(dish, "long")}</p>

          <h4>{t("nutrition")}</h4>
          <ul className="nutri">
            <li>{t("kcal")}: {dish.nutri?.kcal ?? 0}</li>
            <li>{t("carbs")}: {dish.nutri?.carbs ?? 0} g</li>
            <li>{t("protein")}: {dish.nutri?.protein ?? 0} g</li>
            <li>{t("fat")}: {dish.nutri?.fat ?? 0} g</li>
          </ul>

          <button className="btn ghost" onClick={onClose}>{t("close")}</button>
        </div>
      </div>
    </div>
  );

const MenuPage = () => {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const list = useMemo(
    () => (filter === "all" ? MENU : MENU.filter((d) => d.category === filter)),
    [filter]
  );

  return (
    <section className="wrap">
      <h2>{t("menu")}</h2>
      <Filters value={filter} onChange={setFilter} />
      <div className="grid">
        {list.map((d) => (
          <DishCard key={d.id} dish={d} onClick={setOpen} />
        ))}
      </div>
      <DishModal dish={open} onClose={() => setOpen(null)} />
    </section>
  );
};

// ====== GALLERY ======
const Gallery = () => (
  <section className="wrap">
    <h2>{t("nav_gallery")}</h2>
    <div className="masonry">
      {MENU.slice(0, 18).map((d) => (
        <img key={d.id} src={d.image} alt={trDish(d, "name")} loading="lazy" />
      ))}
    </div>
  </section>
);

// ====== LOCATION ======
const Location = () => (
  <section className="wrap">
    <h2>{t("location")}</h2>
    <p className="lead">{t("where")}</p>
    <p className="muted">{t("map_soon")}</p>
    <div className="map-skeleton" />
  </section>
);

// ====== CONTACT + reviews ======
const Stars = ({ value, onChange }) => (
  <div className="stars">
    {[1,2,3,4,5].map(i => (
      <button
        key={i}
        className={i <= value ? "star on" : "star"}
        onClick={() => onChange(i)}
        aria-label={`${i} star`}
      >★</button>
    ))}
  </div>
);

const Contact = () => {
  const [stars, setStars] = useState(Number(localStorage.getItem("stars") || 0));
  const [msg, setMsg] = useState("");

  const send = () => {
    localStorage.setItem("stars", String(stars));
    alert(t("thanks"));
  };

  return (
    <section className="wrap">
      <h2>{t("nav_contact")}</h2>
      <div className="contact">
        <div>
          <h3>{t("review_title")}</h3>
          <Stars value={stars} onChange={setStars} />
          <textarea
            rows="4"
            placeholder="Mensagem / Message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <div className="row">
            <button className="btn" onClick={send}>{t("review_cta")}</button>
            <a className="btn ghost" href="https://wa.me/97430475279" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="btn ghost" href="mailto:restaurant@paneladebarroqatar.com">
              {t("email")}
            </a>
          </div>
        </div>
        <div>
          <h3>{t("support")}</h3>
          <p className="muted">
            Quer apoiar a inauguração? Fale com a gente pelo WhatsApp para pré-reserva de eventos,
            jantares a domicílio e parcerias.
          </p>
        </div>
      </div>
    </section>
  );
};

// ====== ABOUT ======
const About = () => (
  <section className="wrap">
    <h2>{t("about_title")}</h2>
    <div className="about-grid">
      <img src="/images/picanha-grelhada.jpg" alt="Restaurant" />
      <div>
        <p style={{ whiteSpace: "pre-line" }}>{t("about_long")}</p>
        <div className="team">
          <article>
            <img src="/images/galinhada-caipira.jpg" alt="Quessi Jhones" />
            <h4>Quessi Jhones — Chef-Owner</h4>
            <p>10+ anos, 6 anos como Chef de cozinha brasileira em Abu Dhabi e Qatar.</p>
          </article>
          <article>
            <img src="/images/fraldinha-inteira.jpg" alt="Alex" />
            <h4>Alex — Head Chef</h4>
            <p>Mais de 10 anos em cozinha brasileira e italiana. Ponto perfeito e fogão a lenha.</p>
          </article>
          <article>
            <img src="/images/encanto-de-coco.jpg" alt="Dona Cleuza" />
            <h4>Dona Cleuza — Mãe & Cozinheira</h4>
            <p>25+ anos de cozinha, tradição de Minas e herança italiana — desde os 12 no fogão a lenha.</p>
          </article>
        </div>
      </div>
    </div>
  </section>
);

// ====== APP (router) ======
export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    // força aplicar a direção em cada navegação
    document.documentElement.dir = getLang() === "ar" ? "rtl" : "ltr";
  }, [route, getLang()]);

  return (
    <>
      <Nav />
      {route === "/home" || route === "/" ? (
        <>
          <Hero />
          <HomePreview />
        </>
      ) : route === "/menu" ? (
        <MenuPage />
      ) : route === "/gallery" ? (
        <Gallery />
      ) : route === "/location" ? (
        <Location />
      ) : route === "/contact" ? (
        <Contact />
      ) : route === "/about" ? (
        <About />
      ) : (
        <>
          <Hero />
          <HomePreview />
        </>
      )}
    </>
  );
}
