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
        <a className="btn" href="#menu">See the Menu</a>
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
      {/* Splash simples — some sozinho. */}
      <div className="splash" aria-hidden="true">
        <img className="splash-logo" src="/logo.png" alt="" />
      </div>

      <Nav />

      {/* IMERSIVO */}
      <main>
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
            text="Comida que aconchega, música sertaneja e viola — do jeitinho do Brasil."
          />
        </section>

        {/* Seção Exemplos (apenas para garantir que renderiza) */}
        <section id="about" className="block">
          <h2>Nossa História</h2>
          <p>
            Restaurante de família com 20 anos de tradição. Chef-proprietário{" "}
            <strong>Quessi Jhones</strong>, ao lado de sua mãe Cleuza (mineira)
            e seu irmão (Head Chef, 10+ anos em casas brasileiras). Em Doha,
            trazemos cozinha de raiz com hospitalidade brasileira.
          </p>
        </section>

        <section id="menu" className="block">
          <h2>Menu</h2>
          <p>
            O cardápio completo fica em uma página dedicada. Clique no botão
            abaixo para visitar.
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
            <strong>Email:</strong> restaurant@paneladebarroqatar.com<br />
            <strong>Phone:</strong> +974 3047 5279
          </p>
        </section>
      </main>

      <footer className="foot">
        © {new Date().getFullYear()} Panela de Barro — Todos os direitos
        reservados.
      </footer>
    </>
  );
}
