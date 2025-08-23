import React, { useEffect } from "react";

const Nav = () => (
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
    </nav>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero__bg" />
    <div className="hero__content">
      <h1>Brazilian soul food, fire-kissed.</h1>
      <p>
        Family restaurant in Qatar. 20+ years in hospitality — wood-fired
        flavors, countryside warmth and Brazilian roots.
      </p>
      <a href="#menu" className="btn">See the menu</a>
    </div>
  </section>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    <div className="section__body">{children}</div>
  </section>
);

const MenuCard = ({ title, tag, desc, img }) => (
  <article className="card">
    <div className="card__img">
      <img src={img} alt={title} loading="lazy" />
    </div>
    <div className="card__body">
      <div className="card__title">
        <h3>{title}</h3>
        {tag && <span className="pill">{tag}</span>}
      </div>
      <p>{desc}</p>
    </div>
  </article>
);

export default function App() {
  // só para garantir que o viewport comece no topo após build
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Nav />

      <main>
        <Hero />

        <Section id="about" title="Panela de Barro">
          <p>
            A Brazilian family restaurant in Qatar. With 20+ years in hospitality, we bring
            wood-fired flavors, countryside warmth and Brazilian roots. Chef-owner Quessi Jhones
            comanda a cozinha com sua mãe, Dona Cleuza (mineira) e seu irmão (Head Chef com 10+ anos).
          </p>
        </Section>

        <Section id="menu" title="Menu (preview)">
          <div className="grid">
            <MenuCard
              title="Vaca Atolada (Ossobuco)"
              tag="Mains"
              desc="Ossobuco com polenta cremosa e rúcula cítrica."
              img="/public/images/vaca-atolada.jpg"
            />
            <MenuCard
              title="Feijoada de Costela"
              tag="Mains"
              desc="Feijão preto com costela, farofa de banana e vinagrete."
              img="/public/images/feijoada-costela.jpg"
            />
            <MenuCard
              title="Picanha Grelhada"
              tag="Chef’s"
              desc="Com risoto de cogumelos, polenta verde e molho de pimenta do reino."
              img="/public/images/picanha-grelhada.jpg"
            />
            <MenuCard
              title="Pão de Queijo"
              tag="Side"
              desc="Tradicional mineiro, macio e quentinho."
              img="/public/images/pao-de-queijo.jpg"
            />
          </div>
          <p className="muted">* Imagens e texto completos na página de Menu.</p>
        </Section>

        <Section id="gallery" title="Gallery">
          <div className="tiles">
            <img src="/public/images/sol-do-cerrado.jpg" alt="" loading="lazy" />
            <img src="/public/images/mandioca-frita.jpg" alt="" loading="lazy" />
            <img src="/public/images/uva-limao-gelo.jpg" alt="" loading="lazy" />
            <img src="/public/images/moqueca-baiana.jpg" alt="" loading="lazy" />
          </div>
        </Section>

        <Section id="location" title="Location">
          <p>Barwa Town, Doha, Qatar</p>
          <div className="mapbox">
            <iframe
              title="Barwa Town"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Barwa%20Town%2C%20Doha&output=embed"
            />
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <ul className="contact">
            <li>📧 restaurant@paneladebarroqatar.com</li>
            <li>📞 +974 3047 5279</li>
            <li>📍 Barwa Town, Doha, Qatar</li>
          </ul>
        </Section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Panela de Barro • Opening November — <em>coming soon</em>
      </footer>
    </>
  );
}
