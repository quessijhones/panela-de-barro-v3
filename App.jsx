import React from "react";

export default function App() {
  return (
    <div className="app-safe">
      <header className="site-header">
        <img src="/public/logo.png" alt="Panela de Barro" className="logo" />
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
          <a href="#reservations">Reservations</a>
        </nav>
      </header>

      <main className="container">
        <section id="about" style={{padding:"40px 0"}}>
          <h1>Panela de Barro</h1>
          <p>
            A Brazilian family restaurant in Qatar. With 20+ years in hospitality,
            we bring wood-fire flavors, countryside warmth and Brazilian roots.
          </p>
        </section>

        <section id="menu" style={{padding:"20px 0"}}>
          <h2>Menu (preview)</h2>
          <div className="grid">
            <article className="card">
              <img src="/public/images/vaca-atolada.jpg" onError={(e)=>{e.currentTarget.src="/public/images/placeholder.jpg"}} alt="Vaca Atolada" />
              <h3>Vaca Atolada</h3>
              <p>Ossobuco com polenta cremosa e rúcula cítrica.</p>
            </article>
            <article className="card">
              <img src="/public/images/feijoada-costela.jpg" onError={(e)=>{e.currentTarget.src="/public/images/placeholder.jpg"}} alt="Feijoada de Costela" />
              <h3>Feijoada de Costela</h3>
              <p>Feijão preto com costela, farofa de banana e vinagrete.</p>
            </article>
          </div>
        </section>

        <section id="location" style={{padding:"20px 0"}}>
          <h2>Location</h2>
          <p>Barwa Town, Doha, Qatar</p>
        </section>

        <section id="contact" style={{padding:"20px 0"}}>
          <h2>Contact</h2>
          <p>Email: restaurant@paneladebarroqatar.com</p>
          <p>Phone: +974 3047 5279</p>
        </section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Panela de Barro</footer>
    </div>
  );
}