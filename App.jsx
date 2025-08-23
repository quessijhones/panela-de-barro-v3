import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const dishes = [
  // Ajuste os nomes das imagens exatamente ao que está em /public/images
  {
    id: "feijoada-costela",
    name: "Feijoada de Costela",
    category: "mains",
    img: "/images/feijoada-costela.jpg",
    desc: "Feijoada de costela bovina servida com farofa de banana, laranja, vinagrete e arroz temperado."
  },
  {
    id: "pao-de-queijo",
    name: "Pão de Queijo",
    category: "sides",
    img: "/images/pao-de-queijo.jpg",
    desc: "Tradicional pão de queijo brasileiro, macio e quentinho."
  },
  {
    id: "moqueca-baiana",
    name: "Moqueca Baiana",
    category: "mains",
    img: "/images/moqueca-baiana.jpg",
    desc: "Peixe cozido com leite de coco e dendê, servido com arroz e farofa."
  },
  {
    id: "pamonha",
    name: "Pamonha (Sazonal)",
    category: "seasonal",
    img: "/images/pamonha.jpg",
    desc: "Clássico de milho verde — doce, cremoso e perfumado. Disponível sazonalmente."
  },
  {
    id: "coco-flan",
    name: "Encanto de Coco (Flan)",
    category: "desserts",
    img: "/images/encanto-de-coco.jpg",
    desc: "Pudim de coco sedoso com caramelo dourado."
  },
  {
    id: "sol-do-cerrado",
    name: "Sol do Cerrado",
    category: "beverages",
    img: "/images/sol-do-cerrado.jpg",
    desc: "Manga com maracujá, hortelã e toque cítrico."
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "mains", label: "Mains" },
  { key: "sides", label: "Side Dishes" },
  { key: "desserts", label: "Desserts" },
  { key: "beverages", label: "Beverages" },
  { key: "seasonal", label: "Seasonal" },
];

function useImage(src) {
  const [ok, setOk] = useState(true);
  useEffect(() => {
    if (!src) return;
    const img = new Image();
    img.onload = () => setOk(true);
    img.onerror = () => setOk(false);
    img.src = src;
  }, [src]);
  return ok ? src : "/images/placeholder.jpg";
}

function Splash() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      // vai para home
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/logo.png"
            alt="Panela de Barro"
            className="splash-logo"
            initial={{ scale: 0.9, y: 0, opacity: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ repeat: 1, repeatType: "reverse", duration: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  return (
    <header className="topbar">
      <nav className="container nav">
        <NavLink to="/" className="brand">
          <img src="/logo.png" alt="Panela de Barro" />
          <span>Panela de Barro</span>
        </NavLink>
        <div className="links">
          <NavLink to="/#about">About</NavLink>
          <NavLink to="/#menu">Menu</NavLink>
          <NavLink to="/#gallery">Gallery</NavLink>
          <NavLink to="/#location">Location</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          <NavLink to="/#reservations">Reservations</NavLink>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Panela de Barro</h1>
        <p>Brazilian Heritage Cuisine in Qatar</p>
        <div className="hero-cta">
          <a href="/#/menu" className="btn btn-primary">See the Menu</a>
          <a href="/#/reservations" className="btn">Reserve a Table</a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="container section">
        <h2>Our Story</h2>
        <p>
          A Brazilian family restaurant in Qatar. With 20 years in hospitality, we bring
          fire-kissed flavors from a wood-fired stove and the warmth of countryside music.
          Chef-owner Quessi Jhones leads the kitchen with his mother Dona Cleuza, from Minas
          Gerais, and his brother, the Head Chef with 10+ years of experience. Expect soulful
          regional classics, generous hospitality, and real Brazilian roots. <strong>Coming soon — November.</strong>
        </p>
      </section>
    </>
  );
}

function Menu() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? dishes
    : dishes.filter(d => d.category === filter);

  return (
    <section className="container section">
      <h1>Menu</h1>
      <div className="chips">
        {CATEGORIES.map(c => (
          <button
            key={c.key}
            className={`chip ${filter === c.key ? "active" : ""}`}
            onClick={() => setFilter(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map(d => (
          <MenuCard key={d.id} dish={d} />
        ))}
      </div>
    </section>
  );
}

function MenuCard({ dish }) {
  const src = useImage(dish.img);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setOpen(true)}>
        <img src={src} alt={dish.name} loading="lazy" />
        <div className="card-body">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <span className="badge">{labelFromCategory(dish.category)}</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="modal-dialog"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={src} alt={dish.name} />
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <button className="btn" onClick={() => setOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function labelFromCategory(cat) {
  switch (cat) {
    case "mains": return "Mains";
    case "sides": return "Side Dish";
    case "desserts": return "Dessert";
    case "beverages": return "Beverage";
    case "seasonal": return "Seasonal";
    default: return "";
  }
}

export default function App() {
  return (
    <HashRouter>
      <Splash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* as outras âncoras podem continuar na mesma página */}
      </Routes>
    </HashRouter>
  );
}