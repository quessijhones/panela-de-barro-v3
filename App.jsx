// App.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const IMAGES = [
  { id: "amazonia", src: "/immersive/amazonia.jpg", title: "Amazônia", caption: "Florestas que respiram cultura." },
  { id: "cerrado",  src: "/immersive/cerrado.jpg",  title: "Cerrado",  caption: "Sabores do Brasil central." },
  { id: "lencois",  src: "/immersive/lencois.jpg",  title: "Lençóis",  caption: "Areia, vento e mar — leveza." },
  { id: "litoral",  src: "/immersive/litoral.jpg",  title: "Litoral",  caption: "Brasil que encontra o mar." },
  { id: "serra",    src: "/immersive/serra.jpg",    title: "Serra",    caption: "Brasa, lenha e aconchego." },
];

// ---------- Error Boundary para evitar tela branca ----------
class SafeBoundary extends React.Component {
  constructor(props){ super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(){ return { hasError: true }; }
  componentDidCatch(err, info){ console.error("UI crash:", err, info); }
  render(){
    if(this.state.hasError){
      return (
        <div style={{padding:"24px"}}>
          <h2>Algo deu errado ao carregar.</h2>
          <p>Tente recarregar a página. Se persistir, avise o desenvolvedor.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// ---------- Splash com logo ----------
function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src="/logo.png"
        alt="Panela de Barro"
        initial={{ scale: 0.8, y: 0, filter: "blur(6px)" }}
        animate={{ scale: 1, y: -60, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="splash-logo"
      />
    </motion.div>
  );
}

// ---------- Navbar simples ----------
function Nav() {
  return (
    <header className="nav">
      <div className="brand">
        <img src="/logo.png" alt="Panela de Barro" />
        <span>Panela de Barro</span>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
        <a href="#reservations">Reservations</a>
      </nav>
    </header>
  );
}

// ---------- Seção imersiva com parallax ----------
function ImmersiveIntro() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 800], [0, -120]); // parallax leve

  return (
    <section id="about" className="immersive">
      {IMAGES.map((img, i) => (
        <div key={img.id} className="immersive-layer">
          <motion.div
            className="immersive-bg"
            style={{ y: ySlow, backgroundImage: `url(${img.src})` }}
          />
          <div className="immersive-overlay" />
          <div className="immersive-text">
            <h1>{img.title}</h1>
            <p>{img.caption}</p>
          </div>
        </div>
      ))}
      <div className="intro-cta">
        <a className="btn" href="#menu">See the Menu</a>
      </div>
    </section>
  );
}

// ---------- Placeholder das outras âncoras ----------
const Block = ({ id, title, children }) => (
  <section id={id} className="block">
    <h2>{title}</h2>
    {children ? children : <p>Conteúdo em breve.</p>}
  </section>
);

// ---------- App ----------
export default function App() {
  const [ready, setReady] = useState(false);

  // Evita tela branca por erro de assets: alerta no console se imagens faltarem
  useEffect(() => {
    IMAGES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
      img.onerror = () => console.warn("Imagem não encontrada:", src);
    });
  }, []);

  return (
    <SafeBoundary>
      <AnimatePresence mode="wait">
        {!ready && <Splash key="splash" onDone={() => setReady(true)} />}
      </AnimatePresence>

      <Nav />

      <main>
        <ImmersiveIntro />

        <Block id="menu" title="Menu">
          <p>
            Agora o Menu está em sua própria página/âncora com cartões menores.  
            (Se quiser, te mando um `Menu.jsx` grid pronto — por enquanto mantive o foco em consertar a tela branca.)
          </p>
          <a className="btn" href="/#menu-list">Abrir lista do menu</a>
        </Block>

        <Block id="gallery" title="Gallery" />
        <Block id="location" title="Location">
          <p>Barwa Town, Doha – Qatar</p>
          <p><strong>Opening:</strong> November (coming soon)</p>
        </Block>
        <Block id="contact" title="Contact">
          <p>restaurant@paneladebarroqatar.com — +974 3047 5279</p>
        </Block>
        <Block id="reservations" title="Reservations" />
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} Panela de Barro
      </footer>
    </SafeBoundary>
  );
}