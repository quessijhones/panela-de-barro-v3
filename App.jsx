/* App.jsx */
import React from "react";

function Nav() {
  return (
    <header className="nav">
      <div className="brand">
        <img src="/logo.png" alt="Panela de Barro" />
        Panela de Barro
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

function ImmersiveLayer({ bg, title, text }) {
  return (
    <section className="immersive-layer">
      <div
        className="immersive-bg"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />
      <div className="immersive-overlay" aria-hidden="true" />
      <div className="block immersive-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* Splash simples; se quebrar aqui, o trap do main.jsx mostra o erro */}
      <div className="splash" aria-hidden="true">
        <img className="splash-logo" src="/logo.png" alt="" />
      </div>

      <Nav />

      <main>
        {/* Camadas imersivas – só caminhos absolutos para /public */}
        <section className="immersive">
          <ImmersiveLayer
            bg="/immersive/amazonia.jpg"
            title="Sabores com alma do Brasil"
            text="Do fogão a lenha ao prato: hospitalidade mineira e ingredientes brasileiros."
          />
          <ImmersiveLayer
            bg="/immersive/lencois.jpg"
            title="Raiz e tradição"
            text="Receitas de família, fogo baixo e tempo — o segredo do sabor."
          />
          <ImmersiveLayer
            bg="/immersive/cerrado.jpg"
            title="Ingredientes do cerrado"
            text="Milho verde, mandioca, farinhas, temperos e afeto."
          />
          <ImmersiveLayer
            bg="/immersive/litoral.jpg"
            title="Do mar à mesa"
            text="Moquecas e frescor — um abraço do litoral brasileiro."
          />
          <ImmersiveLayer
            bg="/immersive/serra.jpg"
            title="Conforto da Serra"
            text="Comida que aconchega, música sertaneja e viola."
          />
        </section>

        <section id="about" className="block">
          <h2>Nossa História</h2>
          <p>
            20 anos de tradição. Chef-proprietário <b>Quessi Jhones</b>, com a
            mãe Cleuza (mineira) e o irmão (Head Chef). Em Doha, cozinha de raiz
            com hospitalidade brasileira.
          </p>
        </section>

        <section id="menu" className="block">
          <h2>Menu</h2>
          <p>
            Página dedicada, com categorias e imagens. Em breve com reservas
            também.
          </p>
          <a className="btn" href="/#menu">Abrir Menu</a>
        </section>

        <section id="location" className="block">
          <h2>Location</h2>
          <p>Barwa Town, Doha, Qatar — Opening November (coming soon)</p>
        </section>

        <section id="contact" className="block">
          <h2>Contact</h2>
          <p>
            <b>Email:</b> restaurant@paneladebarroqatar.com<br />
            <b>Phone:</b> +974 3047 5279
          </p>
        </section>
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} Panela de Barro
      </footer>
    </>
  );
}